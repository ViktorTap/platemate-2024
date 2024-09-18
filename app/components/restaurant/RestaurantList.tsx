// Components
import RestaurantCard from "./RestaurantCard";

// Model
import { IRestaurant } from "@/app/data/model/restaurant.model";

// Interface
interface IRestaurantListProps {
  restaurants: IRestaurant[];
}

export default function RestaurantList({ restaurants }: IRestaurantListProps) {
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
