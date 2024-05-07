"use server";
import { NextApiRequest, NextApiResponse } from "next";

import bcrypt from "bcrypt";
import { connectDB } from "../data/dbConnector";
import User from "../data/model/user";

interface Values {
  firstName: string;
  lastName: string;
  address: object;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  securedPassword: string;
}

export const securePassword = async (values: Values) => {
  const hashedPassword = await bcrypt.hash(values.password, 10);
  values.securedPassword = hashedPassword;
};

export const prepareAndSendValuesForDB = async (
  values: Values,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await connectDB();

  try {
    const existingEmail = await User.findOne({ email: values.email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    const hashedPassword = await bcrypt.hash(values.password, 10);

    const newUser = await User.create({
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      phone: values.phone,
      email: values.email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Error creating user" });
  }
};
