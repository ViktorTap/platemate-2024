"use client";
// Skeleton with information
import { cart } from "../data/fake-cart";

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
  const [currentCart, setCurrentCart] = useState(cart);

  // CART TOTAL PRICE CALCULATIONS
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (!session) {
  //   return <div>You are not logged in. please log in to view your profile</div>;
  // }

  useEffect(() => {
    const totalPrice = currentCart.reduce(
      (total, item) => total + item.quantity * item.dishPrice,
      0
    );
    console.log(totalPrice);
    setCartTotalPrice(totalPrice);
  }, [currentCart]);

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
          />
        );
      })}

      <section className="cart-total-order-container">
        <p>Total price for cart:</p>
        <p>{cartTotalPrice.toFixed(2)}</p>

        <button>ORDER</button>
      </section>
    </main>
  );
}
