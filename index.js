import express from 'express';
import cors from 'cors';
import path from 'path';
import connectDB from './config/config.js';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import { restrictToLoggedinUsersOnly } from './middlewares/auth.js';

import staticRouter from './routers/staticRouter.js';
import urlRoute from './routers/url.js';
import userRoute from './routers/user.js';

const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));
app.use(cookieParser());

connectDB();

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));


app.use('/', staticRouter);
app.use('/url', restrictToLoggedinUsersOnly, urlRoute); //inline middleware
app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});