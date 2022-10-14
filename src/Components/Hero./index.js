import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import HeroImage from "../../Assets/Images/hero.svg";

export default function Hero() {
  return (
    <div className="hero-container d-flex flex-row">
      <div className="text-container col-lg-5 col-sm-12">
        <h1 className="mb-5">Healthcare Solutions Made Easier</h1>
        <p className="mb-5">
          Medpharm health makes it possible for anyone to get access to
          informative health posts from doctors, quick access to medical care
          and get drugs delivered from verified pharmacies.
        </p>
        <Button className="custom-btn d-flex flex-column justify-content-center align-items-center" href="/get_started">Get Started</Button>
      </div>
      <div className="img-container col-lg-7 col-sm-12">
        <img alt="" src={HeroImage}/>
      </div>
    </div>
  );
}
