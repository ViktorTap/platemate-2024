import { IRestaurant } from "@/app/data/model/restaurant.model";

export default function RestaurantCard(restaurant: IRestaurant) {
  console.log(restaurant.name);

  return (
    <section>
      <h1>this is restaurant card</h1>
      <h3>{restaurant.address.city}</h3>
      <h3>{restaurant.category}</h3>
      <h3>{restaurant.tagline}</h3>
    </section>
  );
}
