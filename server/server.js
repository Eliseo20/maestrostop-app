const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '.env') });

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// Serve static files from the React/Vite app
app.use(express.static(path.join(__dirname, '../dist')));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/budgets', require('./routes/budgets'));
app.use('/api/inventory', require('./routes/inventory'));
app.use('/api/tools', require('./routes/tools'));

app.get('/api/health', (req, res) => {
    res.send('MaestroStop API Running');
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
