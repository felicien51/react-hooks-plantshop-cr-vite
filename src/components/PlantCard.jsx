import React, { useState } from "react";

function PlantCard({ plant }) {
  // Task 3: Mark as sold out (non-persisting, local state only)
  const [inStock, setInStock] = useState(true);

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button
        onClick={() => setInStock((prev) => !prev)}
        className={inStock ? "in-stock" : "out-of-stock"}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;