"use client";

import "./globals.css";
import { useState } from "react";

// Components
import RestaurantList from "./components/restaurant/RestaurantList";
import CategoriesBar from "./components/CategoriesBar";
import SearchBar from "./components/SearchBar";

// Data & Model
import restaurants from "@/app/data/fake-data";
import { IRestaurant } from "@/app/data/model/restaurant.model";

export default function Home() {
  const [displayRestaurants, setDisplayRestaurants] =
    useState<IRestaurant[]>(restaurants);

  return (
    <main className="mt-5">
      <CategoriesBar setDisplayRestaurants={setDisplayRestaurants} />
      <SearchBar />
      <RestaurantList restaurants={displayRestaurants} />
    </main>
  );
}
