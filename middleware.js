const isLoggedIn = (req, res, next) => {

    if(!req.isAuthenticated()) {    //function provided by passport
        req.flash('error', 'You need to login first');
        return res.redirect('/login');
    }
    
    next();
}

const isAdmin = (req, res, next) => {

    if(req.user.username === 'admin') {
        next();

    } else {
        req.flash('error', 'Unauthorised access. Only admin is allowed to do so!');
        return res.redirect('/products');
    }
}

module.exports = {
    isLoggedIn,
    isAdmin
}