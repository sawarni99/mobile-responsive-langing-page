import React from "react";
import "./FirstInfo.css";

function FirstInfo() {
  return (
    <div className="info">
      <div className="first-info">
        <div className="first-info-left">
          <img src="/images/info2.jpg" alt="" />
        </div>
        <div className="first-info-right">
          <div>
            <h1>Requirements gathering and analysis for references.</h1>
            <span>
              Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
              auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat
              tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum
              malesuada a, duis volutpat.
            </span>
          </div>
          <img src="/images/info1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default FirstInfo;
