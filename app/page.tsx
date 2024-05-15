import "./globals.css";

import { connectDB } from "./data/dbConnector";
import RestaurantList from "./components/restaurant/RestaurantList";

export default function Home() {
  return (
    <main>
      <h1>HELLO NEXT.JS</h1>
      <RestaurantList />
    </main>
  );
}
