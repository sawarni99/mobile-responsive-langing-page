import React from "react";
import "./Team.css";
import ImgCard from "../imgCard/ImgCard";

function Team() {
  return (
    <div className="team">
      <h1>Our Leadership</h1>
      <span>
        Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor
        sit ipsum malesuada a, duis volutpat.
      </span>
      <div className="team-cards">
        <ImgCard src="/images/team4.jpg" />
        <ImgCard src="/images/team2.jpg" />
        <ImgCard src="/images/team3.jpg" />
        <ImgCard src="/images/team1.jpg" />
      </div>
    </div>
  );
}

export default Team;
