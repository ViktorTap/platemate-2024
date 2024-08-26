"use client";
// Next
import Image from "next/image";

import { useState } from "react";
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
    _id: dish._id,
    dishName: dish.dishName,
    description: dish.description,
    price: dish.price,
    image: dish.image,
    quantity: currentOrderDishQuantity,
    restaurantName: "restaurant name",
    restaurantUrl: "/restauranturl",
  });

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
              onClick={() =>
                setCurrentOrderDishQuantity(currentOrderDishQuantity - 1)
              }
              disabled={currentOrderDishQuantity === 0}
            >
              -
            </button>
            {currentOrderDishQuantity}
            <button
              onClick={() =>
                setCurrentOrderDishQuantity(currentOrderDishQuantity + 1)
              }
              disabled={currentOrderDishQuantity === 10}
            >
              +
            </button>
          </div>
          <p>{currendDishTotalPrice}</p>
          <button>ADD</button>
        </article>
      </section>
    </>
  );
}
