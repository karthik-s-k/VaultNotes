require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Allow frontend to call backend
app.use(helmet()); // Security headers

// Test Route
app.get('/', (req, res) => {
  res.send('VaultNotes Backend is Running! 🔒');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend is running on http://localhost:${PORT}`);
});
