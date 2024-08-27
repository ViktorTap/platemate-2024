"use client";
// Next
import Image from "next/image";

import { useState, useEffect } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface IDish {
  _id: string;
  dishName: string;
  description: string;
  price: number;
  meal: string;
  image: string;
}

export default function DishCard(dish: IDish) {
  const [currentOrderDishQuantity, setCurrentOrderDishQuantity] = useState(0);
  const [currendDishTotalPrice, setCurrentDishTotalPrice] = useState(
    dish.price * currentOrderDishQuantity
  );
  const [currentOrderDish, setCurrentOrderDish] = useState({
    dish_id: dish._id,
    dishName: dish.dishName,
    dishImage: dish.image,
    quantity: currentOrderDishQuantity,
    description: dish.description,
    restaurantName: "restaurant name",
    restaurantUrl: "/restauranturl",
    dishPrice: dish.price,
  });

  useEffect(() => {
    isInCart(dish._id);
    const newPrice = dish.price * currentOrderDishQuantity;
    setCurrentDishTotalPrice(newPrice);
    setCurrentOrderDish({
      ...currentOrderDish,
      quantity: currentOrderDishQuantity,
    });
  }, [currentOrderDishQuantity]);

  const isInCart = async (id: any) => {
    try {
      const response = await fetch(`http://localhost:3001/cart/${id}`);

      if (response) {
        const json = await response.json();
        console.log(json.quantity);
        if (json.quantity >= 0) {
          const newQuantity = json.quantity;
          setCurrentOrderDishQuantity(newQuantity);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddOrSubtract = (calculation: any) => {
    calculation === "-"
      ? setCurrentOrderDishQuantity(currentOrderDishQuantity - 1)
      : setCurrentOrderDishQuantity(currentOrderDishQuantity + 1);
  };

  const itemsAddedIntoTheCart = () => {
    toast.success("🦄 Wow so easy!", {
      autoClose: 3000,
    });
  };

  const someItemAreInYourCart = () => {
    toast.success("You already have some items in the cart!", {
      autoClose: 3000,
    });
  };

  const addDishToCart = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentOrderDish),
      });
    } catch (error) {
      console.log(error);
    }
    itemsAddedIntoTheCart();
    setCurrentOrderDishQuantity(0);
  };

  return (
    <>
      <Image
        src={dish.image !== "" ? dish.image : "/dishes/default-dish-icon.jpg"}
        alt="Dish icon"
        width={150}
        height={150}
        className="rounded lg"
      />

      <section className="dish-info-container">
        <article className="dish-name-desc-container">
          <p className="mb-1">
            <strong>{dish.dishName}</strong>
          </p>
          <p>{dish.description}</p>
        </article>

        <article className="dish-meal-price-container">
          <p>
            <i>Recommended as: </i>
          </p>
          <p>{dish.meal}</p>
          <p className="mt-0.5">
            <strong>{dish.price} €</strong>
          </p>
          <div className="dish-card-quantity-contaner">
            <button
              onClick={() => handleAddOrSubtract("-")}
              disabled={currentOrderDishQuantity === 0}
            >
              -
            </button>
            {currentOrderDishQuantity}
            <button
              onClick={() => handleAddOrSubtract("+")}
              disabled={currentOrderDishQuantity === 10}
            >
              +
            </button>
          </div>
          <p>{currendDishTotalPrice}</p>
          <button
            onClick={(event) => addDishToCart(event)}
            disabled={currentOrderDishQuantity === 0}
          >
            ADD
          </button>
        </article>
      </section>
    </>
  );
}
