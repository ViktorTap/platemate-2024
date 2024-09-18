"use client";
// Next
import Image from "next/image";

// React
import { useState, useEffect } from "react";

// Next-Auth
import { useSession } from "next-auth/react";
import Link from "next/link";

// Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Interface
interface IDish {
  _id: string;
  dishName: string;
  description: string;
  price: number;
  meal: string;
  image: string;
}
interface DishCardProps extends IDish {
  restID: string;
  restName: string;
}

export default function DishCard(dish: DishCardProps) {
  const { restID, restName, _id, dishName, description, price, meal, image } =
    dish;

  // Session
  const { data: session, status } = useSession();

  // Current states
  const [currentOrderDishQuantity, setCurrentOrderDishQuantity] = useState(0);
  const [currendDishTotalPrice, setCurrentDishTotalPrice] = useState(
    dish.price * currentOrderDishQuantity
  );

  // Going to ORDER
  const [currentOrderDish, setCurrentOrderDish] = useState({
    dish_id: dish._id,
    dishName: dish.dishName,
    dishImage: dish.image,
    quantity: currentOrderDishQuantity,
    description: dish.description,
    restaurantName: `${restName}`,
    restaurantUrl: `/restaurants/${dish.restID}`,
    dishPrice: dish.price,
  });

  useEffect(() => {
    const newPrice = dish.price * currentOrderDishQuantity;
    setCurrentDishTotalPrice(newPrice);
    setCurrentOrderDish({
      ...currentOrderDish,
      quantity: currentOrderDishQuantity,
    });
  }, [currentOrderDishQuantity]);

  const handleAddOrSubtract = (calculation: any) => {
    calculation === "-"
      ? setCurrentOrderDishQuantity(currentOrderDishQuantity - 1)
      : setCurrentOrderDishQuantity(currentOrderDishQuantity + 1);
  };

  const itemsAddedIntoTheCart = () => {
    toast.success("Item added to your Cart :)", {
      autoClose: 3000,
    });
  };

  const someItemAreInYourCart = () => {
    toast.success(
      "You already have this item in the cart, we updated quantity :)",
      {
        autoClose: 3000,
      }
    );
  };

  const addDishToCart = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/cart/${dish._id}`);
      const dishExists = response.status === 200;

      if (dishExists) {
        const json = await response.json();
        await fetch(`http://localhost:3001/cart/${dish._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            quantity: json.quantity + currentOrderDishQuantity,
          }),
        });
        someItemAreInYourCart();
      } else {
        await fetch("http://localhost:3001/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(currentOrderDish),
        });
        itemsAddedIntoTheCart();
      }
    } catch (error) {
      console.log(error);
    }

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

          {status === "authenticated" ? (
            <>
              <div className="dish-card-quantity-contaner">
                <button
                  onClick={() => handleAddOrSubtract("-")}
                  disabled={currentOrderDishQuantity === 0}
                >
                  -
                </button>
                <span className="mx-1.5">{currentOrderDishQuantity}</span>
                <button
                  onClick={() => handleAddOrSubtract("+")}
                  disabled={currentOrderDishQuantity === 10}
                >
                  +
                </button>
              </div>
              <p>{currendDishTotalPrice.toFixed(2)}</p>
              <button
                onClick={(event) => addDishToCart(event)}
                disabled={currentOrderDishQuantity === 0}
              >
                ADD
              </button>
            </>
          ) : (
            <p className="italic text-red-600">
              Please{" "}
              <Link href="/account" className="font-black">
                login
              </Link>{" "}
              to order
            </p>
          )}
        </article>
      </section>
    </>
  );
}
