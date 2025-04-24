import express from 'express';
import urlRoute from './routers/url.js';
import connectToMongoDB from './connect.js';
import dotenv from 'dotenv';

const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/shorturl')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

app.use(express.json());

app.use('/url', urlRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});