const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// @route   POST api/auth/google
// @desc    Google Login
// @access  Public
router.post('/google', async (req, res) => {
    const { token } = req.body;
    const { OAuth2Client } = require('google-auth-library');
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        });
        const { name, email, picture } = ticket.getPayload();

        let user = await User.findOne({ email });

        if (!user) {
            // Create user if not exists
            user = new User({
                name,
                email,
                password: await bcrypt.hash(email + 'google_secret', 10), // Dummy password
                role: 'technician', // Corrected to match User model enum
                profile: {
                    trade: 'General',
                    verified: true // Email verified by Google
                }
            });
            await user.save();
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET || 'secrettoken',
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({
                    token,
                    user: {
                        id: user.id,
                        name: user.name,
                        role: user.role,
                        profile: user.profile
                    }
                });
            }
        );

    } catch (err) {
        console.error('Google Auth Error:', err);
        res.status(400).send('Google Login Failed');
    }
});

// @route   POST api/auth/register (Original)
// @desc    Register a user
// @access  Public
router.post('/register', async (req, res) => {
    const { name, email, password, role, trade } = req.body;

    try {
        // 1. Check if user exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        // 2. Create User instance
        user = new User({
            name,
            email,
            password,
            role,
            profile: {
                trade: trade || 'General',
                verified: false
            }
        });

        // 3. Hash Password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // 4. Save to DB
        await user.save();

        // 5. Return JWT (Auto-login)
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET || 'secrettoken', // Use .env in production
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token, msg: 'Usuario registrado exitosamente' });
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/auth/login
// @desc    Auth user & get token
// @access  Public
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET || 'secrettoken',
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({
                    token,
                    user: {
                        id: user.id,
                        name: user.name,
                        role: user.role,
                        profile: user.profile
                    }
                });
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
