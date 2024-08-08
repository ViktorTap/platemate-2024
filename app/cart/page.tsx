"use client";
// Skeleton with information
import { cart } from "../data/fake-cart";

// NextAuth
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

// React
import { useState } from "react";

export default function CartPage() {
  const { data: session, status } = useSession();
  const [currentCart, setCurrentCart] = useState(cart);

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (!session) {
  //   return <div>You are not logged in. please log in to view your profile</div>;
  // }
  let totalCartPrice = 0;

  return (
    <main className="main-cart-container">
      {/* <p>Email: {session.user?.email}</p>
      <p>session name: {session.user?.name}</p> */}

      {cart.map((item) => {
        totalCartPrice += item.dishPrice * item.quantity;
        return (
          <section key={item.dish_id} className="cart-item-container">
            <p>{item.dishName}</p>
            <Image
              src={item.dishImage}
              alt="Dish icon"
              width={75}
              height={75}
              className="rounded lg"
            />
            <Link href={item.restaurantUrl}>
              <button>{`Visit ${item.restaurantName}`}</button>
            </Link>
            <div className="cart-quantity-container">
              <button>-</button>
              <p>{`Quantity: ${item.quantity}`}</p>
              <button>+</button>
            </div>
            <p>{`Price: ${item.dishPrice}`}</p>
            <p>{`Total: ${item.dishPrice * item.quantity}`}</p>
          </section>
        );
      })}
      <section className="cart-total-order-container">
        <p>Total price for whole cart: {totalCartPrice}</p>
        <button>ORDER</button>
      </section>
    </main>
  );
}
