import mongoose from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  address: {
    city: string;
    street: string;
    postalCode: string;
  };
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  created: Date;
  cart: Array<object>;
  orderHistory: Array<object>;
}

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
  // Test
  created: {
    type: Date,
    default: Date.now,
  },
  cart: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      dish_id: String,
      dishName: String,
      quantity: Number,
      restaurantName: String,
      restaurantUrl: String,
      dishPrice: Number,
    },
  ],
  orderHistory: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },
      dishes: [String],
      quantity: [Number],
      dishPrice: [Number],
      totalPrice: Number,
      created: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const User =
  mongoose.models.users || mongoose.model<IUser>("users", userSchema);

export default User;
