const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    role: {
        type: String,
        enum: ['technician', 'client', 'admin'],
        default: 'client'
    },
    profile: {
        bio: String,
        trade: String, // e.g. Electricist, Plumber
        location: {
            country: String,
            region: String,
            commune: String
        },
        phone: String,
        verified: {
            type: Boolean,
            default: false
        }
    },
    reputation: {
        trustIndex: {
            type: Number,
            default: 5.0
        },
        reviewsCount: {
            type: Number,
            default: 0
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
