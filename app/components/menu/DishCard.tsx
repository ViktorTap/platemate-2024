"use client";
// Next
import Image from "next/image";

// React
import { useState, useEffect } from "react";

// Next-Auth
import { useSession } from "next-auth/react";
import Link from "next/link";

import { connectDB } from "@/app/data/dbConnector";

// Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import User from "@/app/data/model/user.model";

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

  console.log("DishCard ---> session log", session?.user?.email);
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

  // const addDishToCart = async (event: any) => {
  //   event.preventDefault();

  //   try {
  //     // connect to DB
  //     connectDB();

  //     // check if dish exist in user's cart
  //     // const dishExists = await User.findOne({
  //     //   email: session?.user?.email,
  //     //   cart: { $elemMatch: { dish_id: dish._id } },
  //     // }).lean();

  //     if (dishExists) {
  //       // If dish exists, update the quantity
  //       const updatedUser = await User.findOneAndUpdate(
  //         {
  //           email: session?.user?.email,
  //           "cart.dish_id": currentOrderDish.dish_id,
  //         },
  //         { $inc: { "cart.$.quantity": currentOrderDish.quantity } }, // Increment the quantity by the new order amount
  //         { new: true, runValidators: true }
  //       ).lean();

  //       console.log("Dish quantity updated");
  //       someItemAreInYourCart();
  //       return updatedUser;
  //     } else {
  //       // If dish does not exist, add it to the cart
  //       const updatedUser = await User.findOneAndUpdate(
  //         { email: session?.user?.email },
  //         { $push: { cart: currentOrderDish } }, // Add the new dish to the cart
  //         { new: true, runValidators: true }
  //       ).lean();

  //       console.log("Dish added to cart");
  //       itemsAddedIntoTheCart();
  //       return updatedUser;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   setCurrentOrderDishQuantity(0);
  // };

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
                // onClick={(event) => addDishToCart(event)}
                disabled={currentOrderDishQuantity === 0}
              >
                ADD
              </button>
            </>
          ) : (
            <p className="italic text-red-600">
              Please{" "}
              <Link href="/account" className="font-black">
                LOGIN
              </Link>{" "}
              to order
            </p>
          )}
        </article>
      </section>
    </>
  );
}
