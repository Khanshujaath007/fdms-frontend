import React, { useState } from "react";

const Card = ({ title, details,completeDetails }) => {
  return (
    <div className="card">
      <h1 className="card-title">{title}</h1>
      <p className="card-details">{details}</p>
    </div>
  );
};

export default Card;
