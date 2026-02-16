const express = require('express');
const router = express.Router();
const Tool = require('../models/Tool');
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

// @route   GET api/tools
// @desc    Get all tools
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const tools = await Tool.find({ user: req.user.id }).sort({ name: 1 });
        res.json(tools);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/tools
// @desc    Add a tool
// @access  Private
router.post('/', auth, async (req, res) => {
    try {
        const newTool = new Tool({
            user: req.user.id,
            ...req.body
        });
        const tool = await newTool.save();
        res.json(tool);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/tools/:id
// @desc    Update a tool
// @access  Private
router.put('/:id', auth, async (req, res) => {
    try {
        let tool = await Tool.findById(req.params.id);
        if (!tool) return res.status(404).json({ msg: 'Tool not found' });
        if (tool.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

        tool = await Tool.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.json(tool);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/tools/:id
// @desc    Delete a tool
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let tool = await Tool.findById(req.params.id);
        if (!tool) return res.status(404).json({ msg: 'Tool not found' });
        if (tool.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

        await Tool.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Tool removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
