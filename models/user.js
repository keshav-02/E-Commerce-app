const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    cart: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
        }
    ]
});

userSchema.plugin(passportLocalMongoose); //to add username & password(hash & salt) automtically in DB behind the scenes

const User = mongoose.model('User',userSchema);

module.exports = User;