import express from 'express';
import path from 'path';
import connectToMongoDB from './connect.js';
import { PORT, MONGODB_URI } from './config/config.js';
import cookieParser from 'cookie-parser';
import { restrictToLoggedinUsersOnly } from './middlewares/auth.js';

import staticRouter from './routers/staticRouter.js';
import urlRoute from './routers/url.js';
import userRoute from './routers/user.js';

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
app.use(cookieParser());

app.use('/', staticRouter);
app.use('/url', restrictToLoggedinUsersOnly, urlRoute); //inline middleware
app.use('/user', userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});