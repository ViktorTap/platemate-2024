"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// import React, { Dispatch, SetStateAction } from 'react';

import { HiOutlineTrash, HiTrash } from "react-icons/hi";

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
  currentCart: any;
  setCurrentCart: any;
}

export default function CartCard({
  cart,
  setCartTotalPrice,
  cartTotalPrice,
  currentCart,
  setCurrentCart,
}: ICartCardProps) {
  // CART ITEM CALCULATIONS
  const [cartItemPrice, setCartItemPrice] = useState(cart.dishPrice);
  const [cartItemQuantity, setCartItemQuantity] = useState(cart.quantity);
  const [cartItemTotalPrice, setCartItemTotalPrice] = useState(
    cartItemPrice * cartItemQuantity
  );

  // icon hovered swap
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setCartItemTotalPrice(cartItemPrice * cartItemQuantity);
    setCartTotalPrice(cartTotalPrice + cartItemTotalPrice);
  }, [cartItemQuantity]);

  // ADD QUANTITY
  const handleAddQuantity = async (id: string) => {
    const newQuantity = cartItemQuantity + 1;

    setCartItemQuantity(newQuantity);

    try {
      const response = await fetch(`http://localhost:3001/cart/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: newQuantity }),
      });

      if (!response.ok) {
        throw new Error("Failed to update dish quantity");
      }

      // Updating State
      // setCurrentCart((currentCart: any) => {
      //   const updatedCart = currentCart.map((item: any) =>
      //     item.dish_id === id ? { ...item, quantity: newQuantity } : item
      //   );
      //   return updatedCart;
      // });
    } catch (error) {
      console.error("Error updating dish quantity:", error);
    }
  };

  // SUBTRACT QUANTITY
  const handleSubtractQuantity = async (id: string) => {
    const newQuantity = cartItemQuantity - 1;

    setCartItemQuantity(newQuantity);

    // updating state

    const updatedCart = currentCart.map((item: any) =>
      item.dish_id === id ? { ...item, quantity: newQuantity } : item
    );

    setCurrentCart(updatedCart);

    try {
      const response = await fetch(`http://localhost:3001/cart/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: newQuantity }),
      });

      if (!response.ok) {
        throw new Error("Failed to update dish quantity");
      }
    } catch (error) {
      console.error("Error updating dish quantity:", error);
    }
  };
  // DELETE
  const handleDeleteCartItem = async (id: string) => {
    // updating state
    // setCurrentCart((currentCart: any) => {
    //   const updatedCart = currentCart.filter((item: any) => item.dish_id != id);
    //   return updatedCart;
    // });

    try {
      await fetch(`http://localhost:3001/cart/${id}`, {
        method: "DELETE",
      });

      setCurrentCart(currentCart.filter((item: any) => item.dish_id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <section className="cart-item-container">
      <p
        className="cart-item-delete"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => handleDeleteCartItem(cart.dish_id)}
      >
        {isHovered ? <HiTrash size={24} /> : <HiOutlineTrash size={24} />}
      </p>
      <div className="cart-item-image-description">
        <Image
          src={
            cart.dishImage !== ""
              ? cart.dishImage
              : "/dishes/default-dish-icon.jpg"
          }
          alt="Dish icon"
          width={150}
          height={150}
          className="rounded lg"
        />
        <div className="cart-item-name-description">
          <p>{cart.dishName}</p>
          <p>{cart.description}</p>
          <div className="cart-pricing-container">
            <Link href={cart.restaurantUrl}>
              <button>{`Visit ${cart.restaurantName}`}</button>
            </Link>

            <div className="cart-quantity-container">
              <p>{`Price: ${cartItemPrice}`}</p>
              <button
                onClick={() => handleSubtractQuantity(cart.dish_id)}
                disabled={cartItemQuantity <= 1}
              >
                -
              </button>
              <p>{cartItemQuantity}</p>
              <button onClick={() => handleAddQuantity(cart.dish_id)}>+</button>
              <p>{`Total: ${cartItemTotalPrice.toFixed(2)}`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
