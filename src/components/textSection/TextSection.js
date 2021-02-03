import React from "react";
import "./TextSection.css";
import Card from "../card/Card";

function TextSection() {
  const CardView = ({ heading, src }) => {
    return (
      <div className="text-section-card">
        <div>
          <img src={src} alt="" />
        </div>
        <div>
          <h4>{heading}</h4>
          <span>
            Vitae nulla nunc euismod vel nunc euismod velpretium tellus accumsan
            nulla nunc euismod ve semper.
          </span>
        </div>
      </div>
    );
  };
  return (
    <div className="text-section">
      <div className="text-section-bg" />
      <p>
        <b>DESIGN CONCEPT</b>
      </p>
      <h1 className="text-section-head">
        The best design for your studio website
      </h1>
      <br />
      <p className="text-section-head">
        Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor
        sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus,
        viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
        volutpat.
      </p>
      <div className="text-section-top">
        <div>
          <CardView heading="Design Concept" src="/images/exclamation.png" />
          <CardView heading="Developing Websites" src="/images/clock.svg" />
        </div>
        <div>
          <CardView heading="Developing Websites" src="/images/clock.svg" />
          <CardView heading="Design Concept" src="/images/exclamation.png   " />
        </div>
      </div>
      <div className="text-section-heading">
        <h2>The best design for your studio website</h2>
        <p>
          <u>Experienced Team</u>
        </p>
      </div>
      <div className="text-section-bottom">
        <Card heading="Audit" />
        <Card heading="Team Work" />
        <Card heading="Create" />
      </div>
    </div>
  );
}

export default TextSection;
