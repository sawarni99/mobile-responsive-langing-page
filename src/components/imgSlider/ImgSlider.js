import React, { useState } from "react";
import "./ImgSlider.css";

function ImgSlider() {
  const [style, setStyle] = useState({
    left: "0px",
  });
  let { left } = style;
  left = parseInt(left);

  const onClickLeft = () => {
    const id = setInterval(frame, 0.5);
    let pos = left;
    function frame() {
      if (pos < 0) {
        clearInterval(id);
        setStyle({ ...style, left: "0px" });
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
      if (pos > 230) {
        clearInterval(id);
        setStyle({ ...style, left: "230px" });
      } else {
        pos += 8;
        setStyle({ ...style, left: pos++ });
      }
    }
  };
  return (
    <div className="img-slider">
      <div className="img-slider-loader-container">
        <div style={style} className="img-slider-loader" />
      </div>
      <img className="img-slider-bg" src="/images/info4.jpg" alt="" />
      <div className="img-slider-button">
        <img onClick={onClickLeft} src="/images/left-arrow.png" alt="" />
        <img onClick={onClickRight} src="/images/right-arrow.png" alt="" />
      </div>
    </div>
  );
}

export default ImgSlider;
