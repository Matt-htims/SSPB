require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const propRoutes = require('./routes/propRoutes');

connectDB();

const app = express();

app.use(express.json());

app.use('/api/props', propRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
