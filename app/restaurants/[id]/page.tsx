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
              />
              <div>
                <h1>{rest.name}</h1>
                <p>
                  <i>{rest.tagline}</i>
                </p>

                <p>
                  <strong>ADDRESS:</strong>
                </p>
                <p>{rest.address.street}</p>
                <p>{rest.address.postalCode}</p>
                <p>{rest.address.city}</p>
                <p>
                  <strong>CONTACT:</strong>
                </p>
                <p>{rest.phone}</p>
                <p>{rest.email}</p>
              </div>
            </div>
            <strong>MENU:</strong>
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
                    <div>
                      <p>{dish.dishName}</p>
                      <p>{dish.description}</p>
                      <p>{dish.meal}</p>
                      <p>{dish.price}</p>
                    </div>
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
