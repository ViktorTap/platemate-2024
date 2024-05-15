import { IRestaurant } from "@/app/data/model/restaurant.model";

export default function RestaurantCard(restaurant: IRestaurant) {
  console.log(restaurant.name);

  return <h1>this is restaurant card</h1>;
}
