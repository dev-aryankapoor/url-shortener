import mongoose from "mongoose";
import 'dotenv/config';

const url = process.env.MONGODB_URI;

const connectDB = () => {
    mongoose.connection.on('connected', () => {
        console.log("database connected");
    });

    mongoose.connect(url);
};

export default connectDB;