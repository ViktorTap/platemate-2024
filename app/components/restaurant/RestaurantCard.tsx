// Next
import Image from "next/image";
import Link from "next/link";

// Interface
import { IRestaurant } from "@/app/data/model/restaurant.model";

export default function RestaurantCard(restaurant: IRestaurant) {
  return (
    <Link href={`/restaurants/${restaurant._id}`}>
      <section className="restaurant-card-container">
        <h1 className="mb-2 font-bold">{restaurant.name}</h1>
        <Image
          src={
            restaurant.logo !== ""
              ? restaurant.logo
              : "/rest-logos/default-rest-logo.jpeg"
          }
          alt="Restaurant logo"
          width={175}
          height={175}
          className="mb-2 rounded-lg"
          priority={true}
        />
        <p className="mb-2">
          <i>{restaurant.tagline}</i>
        </p>
        <article className="flex-col justify-center mb-2 restaurant-address-container">
          <h1>ADDRESS:</h1>
          <p>{restaurant.address.street}</p>
          <p>{restaurant.address.postalCode}</p>
          <p>{restaurant.address.city}</p>
        </article>

        <article className="text-center">
          <p>
            <strong>Category:</strong>
          </p>

          {restaurant.category.map((category, index) => {
            return (
              <div key={index}>
                <span>{category}</span>
                <br></br>
              </div>
            );
          })}
        </article>
      </section>
    </Link>
  );
}
