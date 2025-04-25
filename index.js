import express from 'express';
import path from 'path';
import urlRoute from './routers/url.js';
import connectToMongoDB from './connect.js';
import { PORT, MONGODB_URI } from './config/config.js';
import staticRouter from './routers/staticRouter.js';
import Url from './models/URL.js';

const app = express();

connectToMongoDB(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/url', urlRoute);
app.use('/', staticRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});