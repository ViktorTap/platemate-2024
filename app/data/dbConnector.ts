import "dotenv/config";
import mongoose from "mongoose";

const connectionString = `mongodb+srv://restaurant-practice-2024:${process.env.DB_PASSWORD}@platemate.4t1wqio.mongodb.net/platemateData?retryWrites=true&w=majority&appName=platemate`;

export const connectDB = async () => {
  try {
    await mongoose.connect(connectionString);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process on failure
  }
};
