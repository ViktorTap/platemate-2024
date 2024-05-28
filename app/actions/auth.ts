import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcrypt";
import { connectDB } from "../data/dbConnector";

import User from "../data/model/user.model";

interface ReturnMessage {
  message: string;
  success: boolean;
}

async function loginUser(
  email: string,
  password: string
): Promise<typeof User | ReturnMessage> {
  connectDB();

  try {
    const user = await User.findOne({ email }); // Find user by email
    if (!user)
      return {
        message: "Email not found",
        success: false,
      }; // User not found

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return {
        message: "Information is correct",
        success: true,
      }; // Login successful
    } else {
      return {
        message: "Incorrect password",
        success: false,
      }; // Incorrect password
    }
  } catch (error) {
    console.error("Error during login:", error);
    return {
      message: "Something went wrong",
      success: false,
    };
  }
}

export default loginUser;

// login in actions
// mongoose etc.
// registration
