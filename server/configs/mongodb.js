import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(`${process.env.MONGODB_URI}/bg-remover`);

    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB connection successful");
    });
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB (outer catch):", error);
    throw error; 
  }
};

export default connectDB;

