import mongoose from "mongoose";

const { Schema, model } = mongoose;

export interface IRestaurant {
  _id: string;
  name: string;
  tagline: string;
  logo: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
  };
  description: string;
  open: {
    mon: string;
    tues: string;
    wed: string;
    thurs: string;
    fri: string;
    sat: string;
    sun: string;
  };
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

export interface IDish {
  _id: string;
  dishName: string;
  description: string;
  price: number;
  meal: string;
  image: string;
}

const restaurantSchema = new Schema<IRestaurant>({
  _id: mongoose.Types.ObjectId,
  name: String,
  tagline: String,
  logo: String,
  address: {
    street: String,
    postalCode: String,
    city: String,
  },
  description: String,
  open: {
    mon: String,
    tues: String,
    wed: String,
    thurs: String,
    fri: String,
    sat: String,
    sun: String,
  },
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
