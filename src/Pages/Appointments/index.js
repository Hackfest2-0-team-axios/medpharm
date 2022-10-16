import React, { useState } from "react";
import "./style.css";
import Cal from "../../Assets/Icons/calender.svg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { Button } from "react-bootstrap";
import AddAppointment from "../../Components/addAppointment";
import DocImage from "../../Assets/Images/profileImg.svg";
import AppointmentsTable from "./table";

export default function Appointments() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const doctor = {
    name: "Dr Caleb Moren",
    email: "drcalebmoren@gmail.com",
    img_src: DocImage,
  };

  return (
    <div className="appointments_container pb-5">
      {<AddAppointment open={open} setOpen={setOpen} doctor={doctor} />}
      <div className="d-flex align-items-start">
        <div className="d-flex flex-row align-items-center mb-3">
          <img src={Cal} alt="cal" />
          <span className="calender_title" style={{ fontSize: "2.2rem" }}>
            Appointments
          </span>
        </div>
        <div className="consult_btn_cont d-flex justify-content-md-end justify-content-sm-center w-100">
          <Button className="consult_btn" onClick={handleClickOpen}>
            Book an appointment
          </Button>
        </div>
      </div>
      <div className="date d-flex flex-row mb-5">
        <span className="mr-1 cal_icon">
          <AiOutlineLeft />
        </span>
        <span className="mr-1 p-1">Oct 11 - Oct 16 2022</span>
        <span className="cal_icon">
          <AiOutlineRight />
        </span>
      </div>
      <AppointmentsTable />
    </div>
  );
}


