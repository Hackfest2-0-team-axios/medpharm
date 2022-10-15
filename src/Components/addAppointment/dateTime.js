import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Time from "./time";

export default function DateTime({ date, time, setDate }) {
  const [showTime, setShowTime] = useState(true);

  function onChange(date) {
    setDate(date);
    setShowTime(true);
  }

  return (
    <div>
      <div className="calendar-container">
        <Calendar
          onChange={onChange}
          value={date}
          onClickDay={() => setShowTime(true)}
        />
      </div>
      <div className="text-center">Selected date: {date.toDateString()}</div>
      {/* {date.length > 0 ? (
        <p>
          <span>Start:</span>
          {date[0].toDateString()}
          &nbsp; &nbsp;
          <span>End:</span>
          {date[1].toDateString()}
        </p>
      ) : (
        <p>
          <span>Default selected date:</span>
          {date.toDateString()}
        </p>
      )} */}
      <Time showTime={showTime} date={date} />
    </div>
  );
}
