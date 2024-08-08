"use client";

// Data
import restaurants from "@/app/data/fake-data";

// Next
import Image from "next/image";
import { useState, useEffect } from "react";

// Components
import DishCard from "@/app/components/menu/DishCard";
import Link from "next/link";

export default function RestaurantPage({ params }: { params: { id: string } }) {
  const targetRestaurant = restaurants.filter((restaurant) => {
    return restaurant && restaurant._id === params.id;
  });

  console.log(params);

  // here is pagination magic
  const [visibleDishes, setVisibleDishes] = useState(
    targetRestaurant[0]?.menu.slice(0, 5)
  );
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(targetRestaurant[0]?.menu.length > 5);

  const loadMore = () => {
    const newPage = page + 1;
    const newDishes = targetRestaurant[0].menu.slice(page * 5, newPage * 5);
    setVisibleDishes((prevDishes) => [...prevDishes, ...newDishes]);
    setPage(newPage);
    if (newDishes.length < 5) {
      setHasMore(false);
    }
  };

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

            {/* MENU DISH CONTAINER */}

            <div className="menu-main-container">
              {visibleDishes.map((dish) => {
                return (
                  <div key={dish._id} className="dish-container">
                    <DishCard {...dish} />
                  </div>
                );
              })}
              {hasMore && <button onClick={loadMore}>Load More</button>}
              <button>
                <Link href="/">Back to All Restaurants</Link>
              </button>
            </div>
          </div>
        );
      })}
    </main>
  );
}
