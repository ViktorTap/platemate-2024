import restaurants from "../../data/fake-data";

import RestaurantCard from "./RestaurantCard";

import { IRestaurant } from "@/app/data/model/restaurant.model";

export default function RestaurantList() {
  return (
    <main
      className="restaurant-list-main-container"
      data-testid="restaurant-list"
    >
      {restaurants.map((restaurant: IRestaurant) => {
        return <RestaurantCard key={restaurant._id} {...restaurant} />;
      })}
    </main>
  );
}
