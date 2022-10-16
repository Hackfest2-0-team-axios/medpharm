import Times from "./times.js";

import React from "react";

function Time(props) {
  return <div>{props.showTime ? <Times date={props.date} /> : null}</div>;
}

export default Time;
