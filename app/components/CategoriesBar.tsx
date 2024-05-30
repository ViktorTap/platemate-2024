"use client";
// Model
import { IRestaurant } from "@/app/data/model/restaurant.model";

// Interface
interface CategoriesBarProps {
  setDisplayRestaurants: React.Dispatch<React.SetStateAction<IRestaurant[]>>;
}

// Minimalistic Design - Categories Bar
export default function CategoriesBar({
  setDisplayRestaurants,
}: CategoriesBarProps) {
  return (
    <nav className="border-solid border-b-2 border-[#2f8c43]">
      <ul className="flex flex-wrap gap-y-1 justify-around items-baseline m-5">
        <li>Category 1</li>
        <li>Category 2</li>
        <li>Category 3</li>
        <li>Category 4</li>
        <li>Category 5</li>
      </ul>
    </nav>
  );
}
// Pictures with names of categories
// Clicking to certain category -> change main page restaurant list by category
// Will pass state change into main paig -> restaurant list
