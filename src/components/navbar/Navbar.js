import React from "react";
import "./Navbar.css";
import Button from "../button/Button";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">Space</div>
      <div className="navbar-right">
        <h3>Home</h3>
        <h3>Templates</h3>
        <h3>Price</h3>
        <h3>Help</h3>
        <div>
          <Button size="small">Get In Touch</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
