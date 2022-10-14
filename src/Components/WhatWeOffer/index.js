import React from "react";
import "./style.css";

export default function WhatWeOffer() {
  return (
    <div className="wwo-container p-5">
      <h3 className="mb-3">What we offer</h3>
      <div className="d-flex flex-row">
        <div className="img-cont-cont col-lg-4 col-sm-12">
          <div class="img-cont img-1 d-flex align-items-end p-4">
            <p>A SOCIAL PLATFORM TO INTERACT AND LEARN FROM EXPERTS</p>
          </div>
        </div>
        <div className="img-cont-cont col-lg-4 col-sm-12">
          <div class="img-cont img-2 d-flex align-items-end p-4">
            <p>MEDICAL CONSULTATIONS</p>
          </div>
        </div>
        <div className="img-cont-cont col-lg-4 col-sm-12">
          <div class="img-cont img-3 d-flex align-items-end p-4">
            <p>PRESCRIPTIONS DELIVERED TO YOU</p>
          </div>
        </div>
      </div>
    </div>
  );
}
