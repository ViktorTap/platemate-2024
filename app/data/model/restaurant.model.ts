import mongoose from "mongoose";

const { Schema, model } = mongoose;

export interface IRestaurant {
  _id: string;
  name: string;
  tagline: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
  };
  description: string;
  phone: string;
  email: string;
  category: string[];
  menu: {
    _id: string;
    dishName: string;
    description: string;
    price: number;
    meal: string;
    image: string;
  }[];
}

const restaurantSchema = new Schema<IRestaurant>({
  _id: mongoose.Types.ObjectId,
  name: String,
  tagline: String,
  address: {
    street: String,
    postalCode: String,
    city: String,
  },
  description: String,
  phone: String,
  email: String,
  category: [String],
  menu: [
    {
      _id: mongoose.Types.ObjectId,
      dishName: String,
      description: String,
      price: Number,
      meal: String,
      image: String,
    },
  ],
});

const restaurant = model<IRestaurant>("restaurants", restaurantSchema);

export default restaurant;
