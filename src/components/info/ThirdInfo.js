import React from "react";
import "./ThirdInfo.css";
import PlayButton from "../playButton/PlayButton";

function ThirdInfo() {
  return (
    <div className="info">
      <div className="third-info">
        <div className="third-info-left">
          <h1>The best design for your studio website</h1>
          <span>
            Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
            auctor sit ipsum malesuada duis volutpat.
          </span>
          <p>
            <u>Experienced Team</u>
          </p>
        </div>
        <div className="third-info-right">
          <img src="/images/info4.jpg" alt="" height="350px" width="425px" />
          <PlayButton />
        </div>
      </div>
    </div>
  );
}

export default ThirdInfo;
