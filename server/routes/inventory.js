const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');
const jwt = require('jsonwebtoken');

// Middleware
const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secrettoken');
        req.user = decoded.user;
        next();
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
};

// @route   GET api/inventory
// @desc    Get all inventory items
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const items = await Inventory.find({ user: req.user.id }).sort({ name: 1 });
        res.json(items);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/inventory
// @desc    Add inventory item
// @access  Private
router.post('/', auth, async (req, res) => {
    try {
        const newItem = new Inventory({
            user: req.user.id,
            ...req.body
        });
        const item = await newItem.save();
        res.json(item);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/inventory/:id
// @desc    Update inventory item
// @access  Private
router.put('/:id', auth, async (req, res) => {
    try {
        let item = await Inventory.findById(req.params.id);
        if (!item) return res.status(404).json({ msg: 'Item not found' });
        if (item.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

        item = await Inventory.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.json(item);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/inventory/:id
// @desc    Delete inventory item
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let item = await Inventory.findById(req.params.id);
        if (!item) return res.status(404).json({ msg: 'Item not found' });
        if (item.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

        await Inventory.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Item removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
