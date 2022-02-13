const express = require('express');
const { findById } = require('../models/product');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');
const { isLoggedIn, isAdmin } = require('../middleware');

//get all the products
router.get('/products', async(req,res) => {
    try {
        const products = await Product.find({});
        res.render("products/index",{products});
    } 
    catch (e) {
        req.flash('error','Oops, something went wrong!');
        res.redirect('/error');
    }

});


//get the new form to create new product
router.get('/products/new', isLoggedIn, isAdmin, async(req,res) => {
    res.render("products/new");
});


//create a new product with the given payload
router.post('/products', isLoggedIn, isAdmin, async(req,res) => {
    try {
        const newProduct = {
            ...req.body
        }
        await Product.create(newProduct);
        req.flash('success','Product Created Successfully!');
        res.redirect('/products');
    } 
    catch (e) {
        req.flash('error','Oops, something went wrong!');
        res.redirect('/error');
    }
});


//to show info about a particular product
router.get('/products/:id', async(req,res) => {
    try {
        const {id} = req.params;
        //inflating the found prouduct with the reviews using populate
        const products = await Product.findById(id).populate('reviews');
        res.render('products/show',{products});
    
    } 
    catch (e) {
        req.flash('error','Oops, something went wrong!');
        res.redirect('/error');
    }
});


//getting the edit form prefilled with data
router.get('/products/:id/edit', isLoggedIn, isAdmin, async(req,res) => {
    try {
        const {id} = req.params;
        const products = await Product.findById(id);
        res.render('products/edit',{products});
    } 
    catch (e) {
        req.flash('error','Oops, something went wrong!');
        res.redirect('/error');
    }
});


//updating the product with given payload
router.patch('/products/:id', isLoggedIn, isAdmin, async(req,res) => {
    try {
        const updatedProduct = req.body;
        const {id} = req.params;
        await Product.findByIdAndUpdate(id, updatedProduct);
        res.redirect(`/products/${id}`);
    }
    catch (e) {
        req.flash('error','Oops, something went wrong!');
        res.redirect('/error');
    }
});



//deleting a particular product from DB
router.delete('/products/:id', isLoggedIn, isAdmin, async(req,res) => {
    try {
        const {id} = req.params;
        await Product.findByIdAndDelete(id);
        res.redirect('/products');
    } 
    catch (e) {
        req.flash('error','Oops, something went wrong!');
        res.redirect('/error');
    }
});


//creating a review for each product
router.post('/products/:id/review', isLoggedIn, async(req,res) => {
        
    try {
    const {id} = req.params;
    const product = await Product.findById(id);
    const {rating, comment} = req.body;
    const review = new Review({rating, comment, user:req.user.username});
    product.reviews.push(review);                       //assigning ID of review in product 

    await product.save();
    await review.save();

    req.flash('success','Successfully created your review!!');

    res.redirect(`/products/${id}`);
    } 
    catch (e) {
        req.flash('error','Oops, something went wrong!');
        res.redirect('/error');
    }
});


module.exports = router;