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

  // ORDER

  const submitOrder = async (event: any) => {
    event.preventDefault();

    try {
      const order = {
        dish_id: 0,
        dishes: [],
        quantity: [],
        dishPrice: [],
        totalPrice: cartTotalPrice,
        created: {
          default: new Date().toLocaleDateString(),
        },
      };

      const response = await fetch("http://localhost:3001/orderHistory");
      const result = await response.json();

      order.dish_id = result.length + 1;

      if (currentCart) {
        currentCart.forEach((item) => {
          order.dishes.push(item.dishName);
          order.quantity.push(item.quantity);
          order.dishPrice.push(item.dishPrice);
        });
      }

      await fetch(`http://localhost:3001/orderHistory`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
    } catch (error) {
      console.error(error);
    }
  };

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (!session) {
  //   return <div>You are not logged in. please log in to view your profile</div>;
  // }

  useEffect(() => {
    fetchData();
  }, [cartTotalPrice]);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3001/cart");
      const result = await response.json();

      setCurrentCart(result);

      const totalPrice = result.reduce(
        (total: any, item: any) => total + item?.quantity * item?.dishPrice,
        0
      );

      setCartTotalPrice(totalPrice);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

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

        <button onClick={(event) => submitOrder(event)}>ORDER</button>
      </section>
    </main>
  );
}
