"use client";
// Model & Interface
import { IRestaurant } from "@/app/data/model/restaurant.model";

// Interface
interface CategoriesBarProps {
  setDisplayRestaurants: React.Dispatch<React.SetStateAction<IRestaurant[]>>;
  allRestaurants: IRestaurant[];
}

// Minimalistic Design - Categories Bar
export default function CategoriesBar({
  setDisplayRestaurants,
  allRestaurants,
}: CategoriesBarProps) {
  const handleCategorySelectionClick = (category: string) => {
    const filteredByCategory = allRestaurants.filter((restaurant) =>
      restaurant.category.includes(category)
    );

    setDisplayRestaurants(filteredByCategory);
  };

  return (
    <nav className="border-solid border-b-2 border-[#2f8c43]">
      <ul className="flex flex-wrap gap-2 justify-around items-baseline mt-5">
        <button onClick={() => handleCategorySelectionClick("Hangry Helpers")}>
          Hangry Helpers
        </button>
        <button onClick={() => handleCategorySelectionClick("Sweet Endings")}>
          Sweet Endings
        </button>
        <button onClick={() => handleCategorySelectionClick("Soup-er Stars")}>
          Soup-er Stars
        </button>
      </ul>
      <ul className="flex flex-wrap gap-2 justify-around items-baseline mb-5 mt-2">
        <button
          onClick={() => handleCategorySelectionClick("Vegetarian Ventures")}
        >
          Vegetarian Ventures
        </button>
        <button
          onClick={() => handleCategorySelectionClick("International Intrigue")}
        >
          International Intrigue
        </button>
        <button
          onClick={() => handleCategorySelectionClick("Adult Lunchables")}
        >
          Adult Lunchables
        </button>
      </ul>
    </nav>
  );
}
// Pictures with names of categories
// Clicking to certain category -> change main page restaurant list by category
// Will pass state change into main page -> restaurant list
