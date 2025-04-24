import mongoose from "mongoose";

async function connectToMongoDB(url){
    await mongoose.connect(url);
};

export default connectToMongoDB;