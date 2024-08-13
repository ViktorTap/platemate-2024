import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

export default function CartCard(cart: ICart) {
  // CART ITEM CALCULATIONS
  const [cartItemPrice, setCartItemPrice] = useState(cart.dishPrice);
  const [cartItemQuantity, setCartItemQuantity] = useState(cart.quantity);
  const [cartItemTotalPrice, setCartItemTotalPrice] = useState(
    cartItemPrice * cartItemQuantity
  );

  // ADD QUANTITY
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
          <button>-</button>
          <p>{cartItemQuantity}</p>
          <button>+</button>
        </div>

        <p>{`Total: ${cartItemTotalPrice}`}</p>
      </div>
    </section>
  );
}
