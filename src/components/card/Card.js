import React from "react";
import "./Card.css";

function Card({ heading }) {
  return (
    <div className="card-container">
      <div className="card">
        <p>{heading}</p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
          volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat,
          viverra magna risus.
        </span>
      </div>
      <div className="card-bottom">Experienced Team</div>
    </div>
  );
}

export default Card;
