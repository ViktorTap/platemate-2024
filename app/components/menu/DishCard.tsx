// Next
import Image from "next/image";

interface IDish {
  _id: string;
  dishName: string;
  description: string;
  price: number;
  meal: string;
  image: string;
}

export default function DishCard(dish: IDish) {
  return (
    <>
      <Image
        src={dish.image !== "" ? dish.image : "/dishes/default-dish-icon.jpg"}
        alt="Dish icon"
        width={150}
        height={150}
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
        </article>
      </section>
    </>
  );
}
