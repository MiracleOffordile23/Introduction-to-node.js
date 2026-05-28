import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
const express = require('express');
const mongoose = require('mongoose')
// const router = require('./routes/index.route');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3030;

// MongoDB connection
const mongoURI = process.env.MONGODB_URI ; 
mongoose.connect(mongoURI);

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 