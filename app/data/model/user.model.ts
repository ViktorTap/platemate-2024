import mongoose from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  address: object;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  // cart: {
  //   dish_id: string;
  //   restaurantName: string;
  //   dishPrice: number;
  // }[];
  // orderHistory: object[];
}

// need to add default values
// cart: [{restaurantName: string, dishName: string, dish_id:, dishPrice: string }]

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
  // cart: [
  //   {
  //     dish_id: String,
  //     dishName: String,
  //     quantity: Number,
  //     restaurantName: String,
  //     restaurantUrl: String,
  //     dishPrice: Number,
  //   },
  // ],
  // orderHistory: [
  //   {
  //     order: {
  //       _id: mongoose.Types.ObjectId,
  //       dishes: [String],
  //       quantity: [Number],
  //       totalPrice: Number,
  //     },
  //     created: {
  //       type: Date,
  //       default: Date.now,
  //     },
  //   },
  // ],
});

const User =
  mongoose.models.users || mongoose.model<IUser>("users", userSchema);

export default User;
