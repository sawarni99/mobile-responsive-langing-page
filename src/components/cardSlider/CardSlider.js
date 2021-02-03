import React, { useState, useEffect } from "react";
import "./CardSlider.css";
import Card from "../card/Card";

function CardSlider() {
  const [style, setStyle] = useState({
    top: "0px",
    left: "0px",
  });

  useEffect(() => {
    if (window.innerWidth > 600) {
      setStyle({ top: "150px", left: "460px" });
    }
  }, []);

  let { left } = style;
  left = parseInt(left);

  const onClickLeft = () => {
    const id = setInterval(frame, 0.5);
    let pos = left;
    function frame() {
      if (pos < -200) {
        clearInterval(id);
      } else {
        pos -= 8;
        setStyle({ ...style, left: pos-- });
      }
    }
  };

  const onClickRight = () => {
    const id = setInterval(frame, 0.5);
    let pos = left;
    function frame() {
      if (pos > 500) {
        clearInterval(id);
      } else {
        pos += 8;
        setStyle({ ...style, left: pos++ });
      }
    }
  };

  return (
    <div className="slider">
      <div className="slider-heading">
        DESIGN CONCEPT
        <h1>
          The best design for your
          <br /> studio website
        </h1>
      </div>
      <div style={style} className="slider-cards">
        <Card heading="Name" />
        <Card heading="Name" />
        <Card heading="Name" />
      </div>
      <div className="slider-button">
        <img onClick={onClickLeft} src="/images/left-arrow.png" alt="" />
        <img onClick={onClickRight} src="/images/right-arrow.png" alt="" />
      </div>
    </div>
  );
}

export default CardSlider;
