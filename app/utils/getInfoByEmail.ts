"use server";
import { connectDB } from "../data/dbConnector";

import User from "../data/model/user.model";

interface ProfileIntoPageProps {
  email: string | null | undefined;
}

export default async function getInfoByEmail({
  email,
}: ProfileIntoPageProps): Promise<any> {
  try {
    connectDB();
    console.log("Connected to DB, email:", email);

    //   if (!email) {
    //     throw new Error("Email is not provided");

    // const user = await User.findOne({ email: email });

    // console.log("User found:", user);

    // return user;
    return;
  } catch (error) {
    console.error("Error in getInfoByEmail:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
}
