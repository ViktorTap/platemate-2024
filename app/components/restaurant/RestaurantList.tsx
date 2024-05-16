import { connectDB } from "@/app/data/dbConnector";
import restaurants from "@/app/data/fake-data";

import RestaurantCard from "./RestaurantCard";

import { IRestaurant } from "@/app/data/model/restaurant.model";

export default function RestaurantList() {
  console.log("This is restaurant list");

  return (
    <div>
      <h2>Hello</h2>
      {restaurants.map((restaurant: IRestaurant) => {
        return <RestaurantCard key={restaurant._id} {...restaurant} />;
      })}
    </div>
  );
}
