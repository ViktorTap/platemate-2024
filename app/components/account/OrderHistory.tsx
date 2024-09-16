import { useEffect, useState } from "react";

type Order = {
  dish_id: number;
  dishes: string[];
  quantity: number[];
  dishPrice: number[];
  totalPrice: number;
  created: string;
};

export default function OrderHistory() {
  const [currentOrderHistory, setCurrentOrderHistory] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrderHistory = async () => {
    try {
      const response = await fetch("http://localhost:3001/orderHistory");
      if (!response.ok) throw new Error("Failed to fetch order history");

      const orderHistory: Order[] = await response.json();
      console.log("Fetched Order History:", orderHistory);

      if (Array.isArray(orderHistory)) {
        setCurrentOrderHistory(orderHistory);
      } else if (orderHistory?.default) {
        setCurrentOrderHistory(orderHistory.default);
      } else {
        throw new Error("Unexpected data structure");
      }

      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className="main-orderHistory-container">
      <div>
        <h1>THIS IS THE ORDER HISTORY COMPONENT</h1>
        {currentOrderHistory.length > 0 ? (
          currentOrderHistory.map((order) => (
            <section key={order.dish_id} className="single-order-container">
              <div className="order-date">{order.created?.default}</div>
              <div className="order-information-container">
                <ul className="name-orderHistory-container">
                  <p>Dish name:</p>
                  {order?.dishes.map((dish, index) => (
                    <li key={index}>{dish}</li>
                  ))}
                </ul>
                <div className="price-quantity-container">
                  <ul className="price-orderHistory-container">
                    <p>Price a:</p>
                    {order?.dishPrice.map((price, index) => (
                      <li key={index}>{price}</li>
                    ))}
                  </ul>
                  <ul className="quantity-orderHistory-container">
                    <p>Qnt:</p>
                    {order?.quantity.map((quantity, index) => (
                      <li key={index}>{quantity}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="total-price">
                <h1>{order.totalPrice}</h1>
              </div>
            </section>
          ))
        ) : (
          <p>No order history available</p>
        )}
      </div>
    </main>
  );
}
