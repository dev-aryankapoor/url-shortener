import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId: {
      type: String,
      required: true,
      unique: true
    },
    redirectUrl: {
    type: String,
    required: true,
  },
    visitHistory: [
        {
            timestamp: { type: Number },
            // ip: { type: String }
        }
    ]
}, {timestamps: true}); //created-at and updated-at, managed by mogoose

const Url = mongoose.model("Url", urlSchema); //Mongoose will use the "Url" model to interact with the "urls" collection in MongoDB
export default Url;