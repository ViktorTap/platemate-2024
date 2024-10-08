"use server";

import bcrypt from "bcrypt";
import { connectDB } from "../data/dbConnector";

import User from "../data/model/user.model";
import { redirect } from "next/navigation";

interface Values {
  firstName: string;
  lastName: string;
  address: object;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  // added
  cart: object[];
  orderHistory: object[];
}

interface ReturnMessage {
  message: string;
  success: boolean;
}

export const registerUser = async (
  values: Values
): Promise<typeof User | ReturnMessage> => {
  // async connetion to database
  try {
    connectDB();

    const existingEmail = await User.findOne({ email: values.email });

    if (existingEmail) {
      // console
      console.log("SERVER SIDE >>> Email is already registered");
      return {
        message: "SERVER SIDE >>> Email is already registered",
        success: false,
      };
    }

    const hashedPassword = await bcrypt.hash(values.password, 10);

    const newUser = new User({
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      phone: values.phone,
      email: values.email,
      password: hashedPassword,
      // added
      cart: values.cart,
      orderHistory: values.orderHistory,
    });

    await newUser.save();

    // console
    console.log(newUser);

    return {
      message: `New user - ${newUser.firstName} is created successfully.`,
      success: true,
    };
  } catch (error) {
    console.error("Error server side registration:", error);
    return {
      message: `Error on server-side`,
      success: false,
    };
  }
};
