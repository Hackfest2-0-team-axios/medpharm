import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import DocImage from "../../Assets/Images/profileImg.svg";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(0),
    width: 440,
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(0),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, fontSize: "1.5rem" }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function AppointmentDialog({ open, setOpen, data }) {
  const handleClose = () => {
    setOpen(false);
  };

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
          Appointment Details
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="d-flex flex-row justify-content-start align-items-center background_gray w-full p-3">
            <div className="mr-5">
              <img src={DocImage} alt={data.doctor} className="" />
            </div>
            <div className="">
              <p className="name mb-0">{data.doctor}</p>
              <p className="caption">{data.email}</p>
            </div>
          </div>
          <Typography gutterBottom sx={{ p: 2, fontSize: "16px" }}>
            <div class="d-flex align-items-start justify-content-between flex-row">
              <div>
                <h4>Date</h4>
                <p>{data.date}</p>
              </div>
              <div>
                <span
                  style={{
                    backgroundColor: `${
                      data.status === "Accepted"
                        ? "green"
                        : data.status === "Rejected"
                        ? "red"
                        : "orange"
                    }`,
                    borderRadius: ".5rem",
                    padding: ".5rem",
                    color: "white",
                    fontSize: "1.2rem",
                  }}
                >
                  {data.status}
                </span>
              </div>
            </div>
            <div>
              <h4>Time</h4>
              <p>{data.time}</p>
            </div>
            <div>
              <h4>Duration</h4>
              <p>{data.duration}</p>
            </div>
            <div>
              <h4>Details</h4>
              <p>{data.details}</p>
            </div>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
