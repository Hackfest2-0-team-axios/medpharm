import * as React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Steps from "./stepper";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    fontSize: "1.5rem",
    FontFace: "Poppins",
    width: "100%",
    maxWidth: "550px",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    fontSize: "1.5rem",
    FontFace: "Poppins",
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, fontSize: "1.5rem" }} {...other}>
      {children}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function AddAppointment({ open, setOpen, doctor }) {
  const handleClose = () => {
    setOpen(false);
  };

  const handleBook = () => {
    alert("Appointment booked"); 
    handleClose()
  }

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        scroll="paper"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Add new appointment
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="d-flex flex-row justify-content-start align-items-center background_gray w-full p-2">
            <div className="mr-5">
              <img src={doctor.img_src} alt={doctor.name} className="" />
            </div>
            <div className="">
              <p className="name mb-0">{doctor.name}</p>
              <p className="caption">{doctor.email}</p>
            </div>
          </div>

          <Steps handleBook={handleBook}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ fontSize: "1.5rem" }}>
            Cancel
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
