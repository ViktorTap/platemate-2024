import mongoose from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  address: object;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// need to add default values

const userSchema = new mongoose.Schema<IUser>({
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

// const User = mongoose.model<IUser>("users", userSchema);

const User =
  mongoose.models.users || mongoose.model<IUser>("users", userSchema);
// mognoose.models.users

export default User;
