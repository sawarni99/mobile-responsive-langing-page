import React from "react";
import "./CTA.css";
import Button from "../button/Button";

function CTA() {
  return (
    <div className="cta">
      <div className="cta-left">
        <h2>All-in-one platform for business</h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
          volutpat, viverra magna risus aliquam massa. Ac aliquam ac volutpat,
          viverra magna risus.
        </span>
      </div>
      <div className="cta-right">
        <Button>Get In Touch</Button>
      </div>
    </div>
  );
}

export default CTA;
