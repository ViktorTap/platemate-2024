import * as dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const connectionString = `mongodb+srv://restaurant-practice-2024:${process.env.DB_PASSWORD}@platemate.4t1wqio.mongodb.net/platemateData?retryWrites=true&w=majority&appName=platemate`;

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return; // Already connected
  }
  console.log("CONNECTION FUNCTION");
  mongoose.set("debug", true);

  try {
    await mongoose.connect(connectionString);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
