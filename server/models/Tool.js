const mongoose = require('mongoose');

const ToolSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String
    },
    model: {
        type: String
    },
    purchaseDate: {
        type: Date
    },
    price: {
        type: Number
    },
    lifespanMonths: {
        type: Number,
        default: 24 // Default 2 years
    },
    condition: {
        type: String,
        enum: ['new', 'good', 'fair', 'poor', 'broken'],
        default: 'good'
    },
    status: {
        type: String,
        enum: ['available', 'in_use', 'maintenance', 'lost'],
        default: 'available'
    }
});

// Virtual for monthly depreciation
ToolSchema.virtual('monthlyDepreciation').get(function () {
    if (!this.price || !this.lifespanMonths) return 0;
    return this.price / this.lifespanMonths;
});

module.exports = mongoose.model('Tool', ToolSchema);
