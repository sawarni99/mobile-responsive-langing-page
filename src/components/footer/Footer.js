import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="navbar-left">Space</div>
          <p>
            The best design for your web studio website. Vitae nulla nunc
            euismod vel pretium tellus accumsan semper. Vitae nulla nunc euismod
            vel pretium tellus accumsan semper.
          </p>
        </div>
        <div className="footer-right">
          <div>
            <h4>Pages</h4>
            <br />
            <p>Templates</p>
            <p>Price</p>
            <p>Help</p>
            <p>Contact</p>
          </div>
          <div>
            <h4>Demos</h4>
            <br />
            <p>Dark Theme</p>
            <p style={{ color: "#0E6FFF" }}>Light Theme</p>
            <p>Classic Theme</p>
          </div>
          <div>
            <h4>Resources</h4>
            <br />
            <p>Documentation</p>
          </div>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-end">
        <div>
          <span>
            <span>&#169;</span> 2019-2020 All Rights Researved.
          </span>
        </div>
        <div>
          <b>Terms of Service</b>
        </div>
      </div>
    </div>
  );
}

export default Footer;
