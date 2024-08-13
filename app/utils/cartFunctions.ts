// add
// update

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
function deleteCartItemById(cartItems: ICart[], id: string): ICart[] {
  const filteredCartItems = cartItems.filter((item) => item.dish_id != id);
  return filteredCartItems;
}

// UPDATE
function updateCartItemById(
  cartItems: ICart[],
  id: string,
  updatedData: Partial<ICart>
): ICart | string {
  const foundItem = cartItems.find((item) => item.dish_id === id);

  if (foundItem) {
    Object.assign(foundItem, updatedData);
  }
  return foundItem ? foundItem : "Did not find this item!";
}

export { deleteCartItemById, updateCartItemById };
