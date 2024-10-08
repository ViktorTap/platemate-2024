"use client";
// Style
import "./globals.css";
import { Watch } from "react-loader-spinner";

// React
import { useState, useEffect } from "react";

// Components
import RestaurantList from "./components/restaurant/RestaurantList";
import CategoriesBar from "./components/CategoriesBar";

// Data & Model
import restaurants from "@/app/data/fake-data";
import { IRestaurant } from "@/app/data/model/restaurant.model";

export default function Home() {
  const [allRestaurants] = useState(restaurants);
  const [displayRestaurants, setDisplayRestaurants] = useState<IRestaurant[]>(
    []
  );

  useEffect(() => {
    setTimeout(() => {
      setDisplayRestaurants(restaurants);
    }, 500);
  }, []);

  return (
    <main className="mt-5">
      <CategoriesBar
        allRestaurants={allRestaurants}
        setDisplayRestaurants={setDisplayRestaurants}
      />
      {displayRestaurants.length > 0 ? (
        <RestaurantList restaurants={displayRestaurants} />
      ) : (
        <div className="flex justify-center content-center mt-5">
          <Watch color="#2f8c43" />
        </div>
      )}
    </main>
  );
}
