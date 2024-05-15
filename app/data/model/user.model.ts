import mongoose from "mongoose";

const { Schema, model } = mongoose;

interface IUser {
  firstName: string;
  lastName: string;
  address: object;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const userSchema = new Schema<IUser>({
  firstName: String,
  lastName: String,
  address: {
    street: String,
    postalCode: String,
    city: String,
  },
  phone: String,
  email: String,
  password: String,
  confirmPassword: String,
});

const User = model<IUser>("users", userSchema);

export default User;
