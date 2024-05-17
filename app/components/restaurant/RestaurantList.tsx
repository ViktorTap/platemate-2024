import { connectDB } from "@/app/data/dbConnector";
import restaurants from "@/app/data/fake-data";

import RestaurantCard from "./RestaurantCard";

import { IRestaurant } from "@/app/data/model/restaurant.model";

export default function RestaurantList() {
  return (
    <main className="restaurant-list-main-container">
      {restaurants.map((restaurant: IRestaurant) => {
        return <RestaurantCard key={restaurant._id} {...restaurant} />;
      })}
    </main>
  );
}
