"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import {
  deleteCartItemById,
  updateCartItemById,
} from "@/app/utils/cartFunctions";

interface ICart {
  dish_id: string;
  dishName: string;
  dishImage: string;
  quantity: number;
  description: string;
  restaurantName: string;
  restaurantUrl: string;
  dishPrice: number;
}

interface ICartCardProps {
  cart: ICart;
  setCartTotalPrice: any;
  cartTotalPrice: any;
}

export default function CartCard({
  cart,
  setCartTotalPrice,
  cartTotalPrice,
}: ICartCardProps) {
  // CART ITEM CALCULATIONS
  const [cartItemPrice, setCartItemPrice] = useState(cart.dishPrice);
  const [cartItemQuantity, setCartItemQuantity] = useState(cart.quantity);
  const [cartItemTotalPrice, setCartItemTotalPrice] = useState(
    cartItemPrice * cartItemQuantity
  );

  useEffect(() => {
    setCartItemTotalPrice(cartItemPrice * cartItemQuantity);
    setCartTotalPrice(cartTotalPrice + cartItemTotalPrice);
  }, [cartItemQuantity]);

  // ADD QUANTITY
  const handleAddQuantity = (id: string) => {
    const newQuantity = cartItemQuantity + 1;

    updateCartItemById(id, {
      quantity: newQuantity,
    });

    setCartItemQuantity(newQuantity);
  };

  // SUBTRACT QUANTITY
  const handleSubtractQuantity = (id: string) => {
    const newQuantity = cartItemQuantity - 1;

    updateCartItemById(id, {
      quantity: newQuantity,
    });

    setCartItemQuantity(newQuantity);
  };
  // DELETE

  return (
    <section className="cart-item-container">
      <p className="cart-item-delete">X</p>
      <Image
        src={cart.dishImage}
        alt="Dish icon"
        width={150}
        height={150}
        className="rounded lg"
      />
      <p>{cart.dishName}</p>
      <Link href={cart.restaurantUrl}>
        <button>{`Visit ${cart.restaurantName}`}</button>
      </Link>
      <div className="cart-pricing-container">
        <p>{`Price: ${cartItemPrice}`}</p>
        <div className="cart-quantity-container">
          <button onClick={() => handleSubtractQuantity(cart.dish_id)}>
            -
          </button>
          <p>{cartItemQuantity}</p>
          <button onClick={() => handleAddQuantity(cart.dish_id)}>+</button>
        </div>

        <p>{`Total: ${cartItemTotalPrice.toFixed(2)}`}</p>
      </div>
    </section>
  );
}
