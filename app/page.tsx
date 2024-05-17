import "./globals.css";

import { connectDB } from "./data/dbConnector";
import RestaurantList from "./components/restaurant/RestaurantList";

export default function Home() {
  return (
    <main className="mt-5">
      <h1>CATEGORIES GOES HERE</h1>
      <h1>SEARCH BAR GOES HEER</h1>
      <RestaurantList />
    </main>
  );
}
