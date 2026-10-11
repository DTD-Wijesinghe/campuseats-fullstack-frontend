import DishCard from "./DishCard";

function MenuList({ dishes }) {
  if (dishes.length === 0) {
    return <h3>No dishes match your search.</h3>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
}

export default MenuList;
