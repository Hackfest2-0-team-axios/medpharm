import React from "react";
import RegForm from "../../Components/RegForm";
import "./style.css";
import { Link } from "react-router-dom";

export default function RegisterAsUser() {
  return (
    <div className="user_container d-flex flex-row">
      <h3 className="p-5 fixed">
        <Link to="/" className="logo">
          MedPharm
        </Link>
      </h3>
      <div className="reg_img_container"></div>
      <div className="form_container">
        <RegForm type="user" />
      </div>
    </div>
  );
}
