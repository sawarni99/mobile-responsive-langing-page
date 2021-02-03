import React from "react";
import "./Hero.css";
import Button from "../../components/button/Button";
import Review from "../../components/review/Review";
import ImgSlider from "../../components/imgSlider/ImgSlider";

function Hero() {
  return (
    <div className="hero">
      <ImgSlider />
      <div className="hero-info">
        <h5>DESIGN INSPIRATION</h5>
        <h1>Convallis turpis erat tempus, viverra aliquet.</h1>
        <Button>Get In Touch</Button>
      </div>
      <div className="hero-review">
        <Review
          src="/images/review1.png"
          name="Andry Ford"
          desc="CEO at Whatever"
        >
          I feel so much less stressed as I now know by the book."
        </Review>
      </div>
    </div>
  );
}

export default Hero;
