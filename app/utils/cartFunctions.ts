// add
// update

import { cart } from "../data/fake-cart";

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

// DELETE
function deleteCartItemById(id: string): ICart[] {
  const filteredCartItems = cart.filter((item) => item.dish_id != id);
  return filteredCartItems;
}

// UPDATE
function updateCartItemById(
  id: string,
  updatedData: Partial<ICart>
): ICart | string {
  // Find cart item by ID
  const foundItem = cart.find((item) => item.dish_id === id);

  if (foundItem) {
    // If found, update the item's properties
    Object.assign(foundItem, updatedData);

    // updateCartItemById(cartItems, '1', { quantity: 3, dishPrice: 16 });
  }
  return foundItem ? foundItem : "Did not find this item!";
}

export { deleteCartItemById, updateCartItemById };
