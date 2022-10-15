import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import "./style.css";
import DateTime from "./dateTime";

export default function Steps({ handleBook }) {
  const [activeStep, setActiveStep] = useState(0);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [details, setDetails] = useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNextDuration = () => {
    if (duration === "") {
      alert("Please select a duration");
    } else {
      handleNext();
    }
  };

  const handleNextDetails = () => {
    if (details === "") {
      alert("Please enter details");
    } else {
      handleNext();
    }
  };

  return (
    <Box sx={{ width: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step sx={{}}>
          <StepLabel
            optional={
              duration && activeStep > 0 ? (
                <Typography variant="caption">{duration}</Typography>
              ) : null
            }
          >
            <h3>Add Consultation duration</h3>
          </StepLabel>
          <StepContent>
            <Box sx={{}}>
              <div className="inner_box">
                <span class="add_consultation_icon">
                  <AddIcon />
                </span>
                <select
                  defaultValue={date}
                  onChange={({ target }) => setDuration(target.value)}
                  placeholder="Add duration"
                  class="add_duration"
                >
                  <option value="">Add duration</option>
                  <option value="30Mins">30Mins</option>
                  <option value="1Hour">1Hour</option>
                </select>
              </div>
            </Box>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={handleNextDuration}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Continue
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
        <Step
          sx={{}}
          optional={
            details && activeStep > 1 ? (
              <Typography variant="caption">{details}</Typography>
            ) : null
          }
        >
          <StepLabel optional={""}>
            <h3>Add details</h3>
          </StepLabel>
          <StepContent>
            <Box sx={{}}>
              <div className="inner_box">
                <textarea
                  placeholder="Add details"
                  value={details}
                  onChange={({ target }) => setDetails(target.value)}
                ></textarea>
              </div>
            </Box>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={handleNextDetails}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Continue
                </Button>
                <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
        <Step sx={{}}>
          <StepLabel>
            <h3>Time & Date</h3>
          </StepLabel>
          <StepContent>
            <Box sx={{}}>
              <DateTime
                date={date}
                time={time}
                setDate={setDate}
                setTime={setTime}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={handleBook}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {"Book Appointment"}
                </Button>
                <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
      </Stepper>
    </Box>
  );
}
