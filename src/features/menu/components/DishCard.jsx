import { Link } from "react-router-dom";

function DishCard({ dish }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        width: "220px",
      }}
    >
      <h3>{dish.name}</h3>

      <p>
        <strong>Price:</strong> Rs. {dish.price.toFixed(2)}
      </p>

      <p>
        <strong>Category:</strong> {dish.category}
      </p>

      {dish.available ? (
        <p style={{ color: "green" }}>Available</p>
      ) : (
        <p style={{ color: "red" }}>Sold Out</p>
      )}

      <Link to={`/dish/${dish.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default DishCard;
