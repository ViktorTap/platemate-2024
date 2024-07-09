export default function DishPage({ params }: { params: { dish_id: string } }) {
  return (
    <main className="dish-page-main-container">
      <section className="dish-page-content">
        <h1>{params.dish_id}</h1>
      </section>
    </main>
  );
}
