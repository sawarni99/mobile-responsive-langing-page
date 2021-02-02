import React from "react";
import "./TextSection.css";

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
      <p>
        <b>DESIGN CONCEPT</b>
      </p>
      <br />
      <h1>The best design for your studio website</h1>
      <br />
      <br />
      <span>
        Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor
        sit ipsum malesuada a, duis volutpat. Convallis turpis erat tempus,
        viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
        volutpat.
      </span>
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
      <div className="text-section-bottom">
        <div className="text-section-heading">
          <h2>The best design for your studio website</h2>
          <p>
            <u>Experienced Team</u>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextSection;
