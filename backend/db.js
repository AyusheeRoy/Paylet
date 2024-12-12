const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://AyusheeRoy:Vincent%4005@cluster0.4v3xuk2.mongodb.net/db")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        Lowercase: true,
        minLength: 3,
        maxLength: 20
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    
});

const accountSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    balance: {
        type: Number,
        required: true
    }

});

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.export = {
    User,
    Account
};