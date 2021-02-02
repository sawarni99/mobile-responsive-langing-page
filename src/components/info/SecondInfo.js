import React from "react";
import "./SecondInfo.css";
import PlayButton from "../playButton/PlayButton";

function SecondInfo() {
  return (
    <div className="info">
      <div className="second-info">
        <div className="second-info-left">
          <img src="/images/info3.jpg" alt="" height="350px" width="425px" />
          <PlayButton />
        </div>
        <div className="second-info-right">
          <h1>The best design for your studio website</h1>
          <span>
            Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
            auctor sit ipsum malesuada duis volutpat.
          </span>
          <p>
            <u>Experienced Team</u>
          </p>
        </div>
      </div>
    </div>
  );
}
export default SecondInfo;
