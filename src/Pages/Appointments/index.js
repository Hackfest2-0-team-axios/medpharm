import React from "react";
import "./style.css";
import Cal from "../../Assets/Icons/calender.svg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { Button } from "react-bootstrap";
export default function Appointments({ type }) {
  return (
    <div className="apppintments_container pb-5">
      <div className="d-flex align-items-start">
        <div className="d-flex flex-row align-items-center mb-3">
          <img src={Cal} alt="cal" />
          <span className="calender_title" style={{ fontSize: "2.2rem" }}>
            Calender
          </span>
        </div>
        <div className="consult_btn_cont d-flex justify-content-md-end justify-content-sm-center w-100">
          <Button className="consult_btn">Book appointment</Button>
        </div>
      </div>
      <div className="date d-flex flex-row mb-5">
        <span className="mr-1 cal_icon">
          <AiOutlineLeft />
        </span>
        <span className="mr-1 p-1">Sept 13 - Sept 20 2021</span>
        <span className="cal_icon">
          <AiOutlineRight />
        </span>
      </div>
      <div className="calender" id="calender">
        <div className="date_header">
          <BsClock />
        </div>
        <div className="date_header">13 Mon</div>
        <div className="date_header">14 Tue</div>
        <div className="date_header">15 Wed</div>
        <div className="date_header">16 Thurs</div>
        <div className="date_header">17 Fri</div>
        <div className="date_header current">
          <span>18</span> Fri
        </div>
        <div className="date_header">19 Sat</div>
        <div className="date_header sun">20 Sun</div>
        <div className="time span_2 p-2">9:00</div>
        <div className="bd_blue span_2 appt" id="jane">
          <div className="appt_name bold bd_none">Jane</div>
          <div className="type bd_none">Video consultation</div>
          <div className="duration bd_none"> 9am - 10am</div>
        </div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="time p-2">10:00</div>
        <div className="p-2"></div>
        <div className="p-2"></div>
        <div className="p-2"></div>
        <div className="p-2"></div>
        <div className="p-2 bd_red appt">
          <div className="appt_name bold bd_none">Francis</div>
          <div className="type bd_none">Video consultation</div>
          <div className="duration bd_none"> 10-10:30am</div>
        </div>
        <div className="p-2"></div>
        <div className="p-2"></div>
        <div className="p-2"></div>
        <div className="time p-2">10:30</div>
        <div className="p-2"></div>
        <div className="p-2"></div>
        <div className="p-2"></div>
        <div className="p-2"></div>
        <div className="p-2"></div>
        <div className="p-2 bd_yellow appt span_3">
          <div className="appt_name bold bd_none">Job</div>
          <div className="type bd_none">Video consultation</div>
          <div className="duration bd_none">10:30-12:30am</div>
        </div>
        <div className="p-2"></div>
        <div className="p-2"></div>
        <div className="time  span_2">11:00</div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="time  span_2">12:00</div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>

        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="time p-2">12:30</div>
        <div className="p-2"></div>
        <div className="p-2"></div>
        <div className="p-2"></div>
        <div className="p-2"></div>

        <div className="p-2"></div>
        <div className="p-2"></div>
        <div className="p-2"></div>
        <div className="p-2"></div>
        <div className="time span_2">01:00</div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="time span_2">02:00</div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="p-2 bd_red appt">
          <div className="appt_name bold bd_none span_3">Mishael</div>
          <div className="type bd_none">Video consultation</div>
          <div className="duration bd_none"> 2:00-3:00pm</div>
        </div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        {/* <div className="time span_2 p-2">03:00</div> */}
        {/* <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div>
        <div className="span_2 p-2"></div> */}
      </div>
    </div>
  );
}
