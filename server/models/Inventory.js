const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true,
        default: 0
    },
    unit: {
        type: String, // e.g., 'units', 'kg', 'm'
        default: 'units'
    },
    category: {
        type: String
    },
    minStock: {
        type: Number,
        default: 0
    },
    price: {
        type: Number
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Inventory', InventorySchema);
