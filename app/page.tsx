"use client";
// Style
import "./globals.css";
import { Watch } from "react-loader-spinner";

// React
import { useState, useEffect } from "react";

// Components
import RestaurantList from "./components/restaurant/RestaurantList";
import CategoriesBar from "./components/CategoriesBar";
import SearchBar from "./components/SearchBar";

// Data & Model
import restaurants from "@/app/data/fake-data";
import { IRestaurant } from "@/app/data/model/restaurant.model";

export default function Home() {
  const [displayRestaurants, setDisplayRestaurants] = useState<IRestaurant[]>(
    []
  );

  useEffect(() => {
    setTimeout(() => {
      setDisplayRestaurants(restaurants);
    }, 3000);
  }, []);

  return (
    <main className="mt-5">
      <CategoriesBar setDisplayRestaurants={setDisplayRestaurants} />
      <SearchBar />
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
