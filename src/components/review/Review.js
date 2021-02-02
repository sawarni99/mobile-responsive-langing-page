import React from "react";
import "./Review.css";

function Review({ children, src, name, desc }) {
  return (
    <div className="review">
      <div className="review-text">{children}</div>
      <div className="review-profile">
        <div>
          <img src={src} alt="" />
        </div>
        <div>
          <b>{name}</b>
          <br />
          {desc}
        </div>
      </div>
    </div>
  );
}

export default Review;
