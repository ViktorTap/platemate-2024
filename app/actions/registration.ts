"use server";

import bcrypt from "bcrypt";
import { connectDB } from "../data/dbConnector";

connectDB();

interface Values {
  firstName: string;
  lastName: string;
  address: object;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const prepareAndSendValuesForDB = async (values: Values) => {
  bcrypt.hash(values.password, 10).then((hash) => {
    values.password = hash;
    values.confirmPassword = hash;

    console.log(values);
  });
};

// TS function with arguments
// bcrypt
// console.log values and hashed ps
