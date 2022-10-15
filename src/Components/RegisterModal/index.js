import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function RegisterModal({ setShowModal }) {
  return (
    <div className="modal-container">
      <h3 className="title">Register As</h3>
      <FontAwesomeIcon icon={faTimesCircle} className="icon" onClick={() => setShowModal(false)}/>
      <div className="d-flex flex-column py-5">
        <Button className="m-3 px-5 modal_btn d-flex justify-content-start align-items-center" href="/register_as_user">User</Button>
        <Button className="m-3 px-5 modal_btn d-flex justify-content-start align-items-center" href="/register_as_doctor">Doctor</Button>
        <Button className="m-3 px-5 modal_btn d-flex justify-content-start align-items-center" href="/register_as_pharmacy">Pharmacy</Button>
      </div>
    </div>
  );
}
