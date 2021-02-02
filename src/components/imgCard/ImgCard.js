import React from "react";
import "./ImgCard.css";

function ImgCard({ src }) {
  return (
    <div className="img-card">
      <img src={src} alt="" />
      <div>
        <b>Andry Ford</b>
      </div>
      <div>CEO at Whatever</div>
    </div>
  );
}

export default ImgCard;
