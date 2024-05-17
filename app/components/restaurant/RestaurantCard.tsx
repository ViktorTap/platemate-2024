import { IRestaurant } from "@/app/data/model/restaurant.model";
import Image from "next/image";
import defaultRestaurantLogo from "public/rest-logos/default-rest-logo.jpeg";

export default function RestaurantCard(restaurant: IRestaurant) {
  // const restaurantLogo =
  //   restaurant.logo !== "" ? restaurant.logo : defaultRestaurantLogo;

  return (
    <section className="restaurant-card-container">
      <h1 className="mb-2">{restaurant.name}</h1>
      <Image
        src={
          restaurant.logo !== ""
            ? restaurant.logo
            : "/rest-logos/default-rest-logo.jpeg"
        }
        alt="Restaurant logo"
        width={175}
        height={175}
        className="mb-2"
      />
      <p className="mb-2">{restaurant.tagline}</p>
      <article className="flex-col justify-center mb-2">
        <h1>OSOITE:</h1>
        <p>{restaurant.address.street}</p>
        <p>{restaurant.address.postalCode}</p>
        <p>{restaurant.address.city}</p>
      </article>

      <article className="text-center">
        {restaurant.category.map((category) => {
          return (
            <>
              <span key={category}>{category}</span>
              <br></br>
            </>
          );
        })}
      </article>
    </section>
  );
}
