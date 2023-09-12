import React from "react";

const Card = ({ title, details }) => {
  return (
    <div className="card">
      <h1 className="card-title">{title}</h1>
      <p className="card-details">{details}</p>
    </div>
  );
};

export default Card;
