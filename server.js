const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/router.js');
require('dotenv').config();

// Enable CORS for requests from your frontend (http://localhost:3000)
app.use(cors({
    origin: 'http://localhost:3000' // Allow requests from this origin
}));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use your custom router
app.use('/', router); // Ensure you’re using the correct path for your router

// Root route for basic checks
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start server on port 5000
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
