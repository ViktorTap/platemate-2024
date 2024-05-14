import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

interface IDish {
  name: string;
  description: string;
  price: string;
}

interface IRestaurant {
  name: string;
  address: object;
  phone: string;
  email: string;
  category: string[];
  menu: object[]; //
}

const restaurantSchema = new Schema<IRestaurant>({
  name: String,
  address: {
    street: String,
    postalCode: String,
    city: String,
  },
  phone: String,
  email: String,
  category: [String],
  menu: [
    {
      dishName: String,
      description: String,
      price: String,
    },
  ],
});

const restaurant = model<IRestaurant>("restaurants", restaurantSchema);

export default restaurant;
