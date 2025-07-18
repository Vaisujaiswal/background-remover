import e from "express";
import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on("connected", () => {
        console.log("MongoDB connection successful");
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/bg-remover`)
}

export default connectDB;
