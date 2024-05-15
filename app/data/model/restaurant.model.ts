import mongoose from "mongoose";

const { Schema, model } = mongoose;

export interface IRestaurant {
  _id: object;
  name: string;
  address: object;
  description: string;
  phone: string;
  email: string;
  category: string[];
  menu: object[]; //
}

const restaurantSchema = new Schema<IRestaurant>({
  _id: mongoose.Types.ObjectId,
  name: String,
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
      price: String,
    },
  ],
});

const restaurant = model<IRestaurant>("restaurants", restaurantSchema);

export default restaurant;
