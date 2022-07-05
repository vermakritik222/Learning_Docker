const mongoose = require('mongoose');
const validator = require('validator');

const p2userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name!!!! '],
    },
    photo: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        require: [true, 'enter an email'],
        validate: [validator.isEmail, 'Please provide a valid email'],
    },
    role: {
        type: String,
        require: [true, 'enter an role'],
        enum: {
            values: ['user', 'vender'],
        },
        default: 'user',
    },
    resId: {
        type: mongoose.Schema.Types.ObjectId,
    },
});

const p2user = mongoose.model('p2user', p2userSchema);

module.exports = p2user;
