import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AppointmentDialog from "./details";

const columns = [
  { id: "doctor", label: "Doctor", minWidth: 170 },
  { id: "date", label: "Date of Appointment", minWidth: 100 },
  {
    id: "time",
    label: "Time of Appointment",
    minWidth: 170,
    align: "right",
    format: (value) => value.toString(),
  },
  {
    id: "duration",
    label: "Duration",
    minWidth: 170,
    align: "right",
    format: (value) => value.toString(),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "right",
    format: (value) => value.toString(),
  },
  { id: "view_details", label: "View Details", minWidth: 100, align: "right" },
];

function createData(doctor, email, date, time, duration, status, details) {
  return { doctor, email, date, time, duration, status, details };
}

const rows = [
  createData(
    "John Donald",
    "johndonal@healthplus.com",
    "16 October 2022",
    "9:00AM WAT",
    "30Mins",
    "Accepted",
    "I'm having runny nose and constant haedaches. My body feels weak and I'm always tired. This has been going on for 2 weeks."
  ),
  createData(
    "John Donald",
    "johndonal@healthplus.com",
    "18 October 2022",
    "12:00PM WAT",
    "30Mins",
    "Rejected",
    "I'm having runny nose and constant haedaches. My body feels weak and I'm always tired. This has been going on for 2 weeks."
  ),
  createData(
    "John Donald",
    "johndonal@healthplus.com",
    "19 October 2022",
    "9:00AM WAT",
    "30Mins",
    "Pending",
    "I'm having runny nose and constant haedaches. My body feels weak and I'm always tired. This has been going on for 2 weeks."
  ),
  createData(
    "John Donald",
    "johndonal@healthplus.com",
    "20 October 2022",
    "9:00AM WAT",
    "30Mins",
    "Accepted",
    "I'm having runny nose and constant haedaches. My body feels weak and I'm always tired. This has been going on for 2 weeks."
  ),
  createData(
    "John Donald",
    "johndonal@healthplus.com",
    "22 October 2022",
    "10:00AM WAT",
    "1Hour",
    "Pending",
    "I'm having runny nose and constant haedaches. My body feels weak and I'm always tired. This has been going on for 2 weeks."
  ),
];

export default function AppointmentsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [showDetails, setShowDetails] = React.useState(false);
  const [data_id, setData_id] = React.useState();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleShowDetails = (data_id) => {
    setData_id(data_id);
    setShowDetails(true);
  };

  return (
    <div style={{ fontSize: "3rem" }}>
      {data_id !== undefined && (
        <AppointmentDialog
          open={showDetails}
          setOpen={setShowDetails}
          data={rows[data_id]}
        />
      )}
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, data_id) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={data_id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        const color = (() => {
                          if (column.id === "status") {
                            if (row.status === "Accepted") {
                              return "green";
                            } else if (row.status === "Rejected") {
                              return "red";
                            } else if (row.status === "Pending") {
                              return "orange";
                            }
                          } else {
                            return "inherit";
                          }
                        })();
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "view_details" ? (
                              <span
                                style={{ cursor: "pointer" }}
                                onClick={() => handleShowDetails(data_id)}
                              >
                                <VisibilityIcon />
                              </span>
                            ) : (
                              <span
                                style={{ fontSize: "13px", color: `${color}` }}
                              >
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </span>
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
