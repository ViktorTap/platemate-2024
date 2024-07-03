"use server";
import { connectDB } from "../data/dbConnector";

import User from "../data/model/user.model";

interface ProfileIntoPageProps {
  email: string;
}

interface ReturnMessage {
  message: string;
  success: boolean;
}

export default async function getInfoByEmail({
  email,
}: ProfileIntoPageProps): Promise<typeof User | any> {
  try {
    console.log("TRY SECTION GET INFO BY EMAIL");
    connectDB();

    const existingEmail = await User.findOne({ email: email });

    if (!email) {
      throw new Error("Email is not provided");
    }
    const user = await User.findOne({ email: email }).lean();

    return user;
  } catch (error) {
    console.error("Error in getInfoByEmail:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
}
