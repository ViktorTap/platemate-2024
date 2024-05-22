import restaurants from "@/app/data/fake-data";

import Image from "next/image";

export default function RestaurantPage({ params }: { params: { id: string } }) {
  const targetRestaurant = restaurants.filter((restaurant) => {
    return restaurant && restaurant._id === params.id;
  });

  return (
    <main>
      {targetRestaurant.map((rest) => {
        return (
          <div key={rest._id} className="restaurant-detail-main-container">
            <div className="restaurant-info-container">
              <Image
                src={
                  rest.logo !== ""
                    ? rest.logo
                    : "/rest-logos/default-rest-logo.jpeg"
                }
                alt="Restaurant logo"
                width={250}
                height={250}
                className="rounded-lg"
              />
              <div>
                <h1 className="font-bold text-lg m-1">{rest.name}</h1>
                <p>
                  <i>{rest.tagline}</i>
                </p>

                <p className="m-1">
                  <strong>ADDRESS:</strong>
                </p>
                <p>{rest.address.street}</p>
                <p>{rest.address.postalCode}</p>
                <p>{rest.address.city}</p>
                <p className="m-1">
                  <strong>CONTACT:</strong>
                </p>
                <p>{rest.phone}</p>
                <p>{rest.email}</p>
              </div>
              <div>
                <h1 className="m-1">
                  <strong>OPEN:</strong>
                </h1>
                <ul>
                  <li>MON: {rest.open.mon}</li>
                  <li>TUES: {rest.open.tues}</li>
                  <li>WED: {rest.open.wed}</li>
                  <li>THURS: {rest.open.thurs}</li>
                  <li>FRI: {rest.open.fri}</li>
                  <li>SAT: {rest.open.sat}</li>
                  <li>SUN: {rest.open.sun}</li>
                </ul>
              </div>
            </div>
            <div className="menu-main-container">
              {rest.menu.map((dish) => {
                return (
                  <div key={dish._id} className="dish-container">
                    <Image
                      src={
                        dish.image !== ""
                          ? dish.image
                          : "/dishes/default-dish-icon.jpg"
                      }
                      alt="Dish icon"
                      width={150}
                      height={150}
                    />
                    <section className="dish-info-container">
                      <article className="dish-name-desc-container">
                        <p className="mb-1">
                          <strong>{dish.dishName}</strong>
                        </p>
                        <p>{dish.description}</p>
                      </article>

                      <article className="dish-meal-price-container">
                        <p>
                          <i>Recommended as: </i>
                        </p>
                        <p>{dish.meal}</p>
                        <p className="mt-0.5">
                          <strong>{dish.price} €</strong>
                        </p>
                      </article>
                    </section>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
}
