import React from 'react';
import { Link } from 'react-router-dom';

function CarCard({ car }) {
  return (
    <div className="car-card">
      <h2>{car.title}</h2>
      <p>{car.description}</p>
      <p>{car.tags}</p>
      <Link to={`/car/${car._id}`}>View Details</Link>
    </div>
  );
}

export default CarCard;
