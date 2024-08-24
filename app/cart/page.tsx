"use client";
// Skeleton with information

// NextAuth
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

// React
import { useState, useEffect } from "react";

import CartCard from "../components/cart/CartCard";

export default function CartPage() {
  const { data: session, status } = useSession();

  // CART ITEMS
  const [currentCart, setCurrentCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // CART TOTAL PRICE CALCULATIONS
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (!session) {
  //   return <div>You are not logged in. please log in to view your profile</div>;
  // }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3001/cart");
        const result = await response.json();
        setCurrentCart(result);

        const totalPrice = currentCart.reduce(
          (total, item) => total + item?.quantity * item?.dishPrice,
          0
        );
        setCartTotalPrice(totalPrice);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [currentCart]);

  if (loading) return <div>Loading...</div>;

  return (
    <main className="main-cart-container">
      {/* <p>Email: {session.user?.email}</p>
      <p>session name: {session.user?.name}</p> */}

      {currentCart.map((item) => {
        return (
          <CartCard
            key={item.dish_id}
            cart={item}
            cartTotalPrice={cartTotalPrice}
            setCartTotalPrice={setCartTotalPrice}
            currentCart={currentCart}
            setCurrentCart={setCurrentCart}
          />
        );
      })}
      {currentCart.length <= 0 && "Cart is Empty"}
      <section className="cart-total-order-container">
        <p>Total price for cart:</p>
        <p>{cartTotalPrice.toFixed(2)}</p>

        <button>ORDER</button>
      </section>
    </main>
  );
}
