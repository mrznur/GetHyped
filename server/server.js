const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const homepageRoutes = require('./routes/homepageRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static assets (images)
app.use('/assets', express.static(path.join(__dirname, '../assets')));

app.use('/api/homepage', homepageRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/gethyped';

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
