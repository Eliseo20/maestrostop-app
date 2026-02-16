const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    client: {
        type: String,
        required: true
    },
    clientRut: {
        type: String
    },
    clientEmail: {
        type: String
    },
    trade: {
        type: String,
        default: 'General'
    },
    projectType: {
        type: String,
        required: true
    },
    location: {
        region: String,
        commune: String,
        address: String
    },
    items: [{
        desc: String,
        type: {
            type: String,
            enum: ['material_tech', 'labor', 'material_client'],
            default: 'material_tech'
        },
        qty: Number,
        price: Number,
        total: Number
    }],
    annexes: [{
        desc: String,
        price: Number
    }],
    total: {
        type: Number,
        required: true
    },
    advance: {
        type: Number
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected', 'delivered', 'paid'],
        default: 'pending'
    },
    startTime: {
        type: Date
    },
    endTime: {
        type: Date
    },
    actualHours: {
        type: Number
    },
    hourlyRate: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Budget', BudgetSchema);
