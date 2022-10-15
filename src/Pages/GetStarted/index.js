import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./style.css";
import RegisterModal from "../../Components/RegisterModal";
import Bg from "../../Assets/Images/createAccountBg.jpeg";

export default function GetStarted() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container_gs">
      <img alt="" src={Bg} width="100%" />
      <div className="overlay"></div>
      <h3 className="p-5">
        <Link to="/" className="logo">
          MedPharm
        </Link>
      </h3>
      <div className="btn-cont d-flex flex-column justify-content-center align-items-center">
          <Button
            className="custom-btn-lg m-4"
            href="#"
            onClick={() => setShowModal(true)}
          >
            Create Account
          </Button>
          <Button className="custom-btn-lg m-4" href="/login">
            Log in
          </Button>
        {showModal && <RegisterModal setShowModal={setShowModal} />}
      </div>
    </div>
  );
}
