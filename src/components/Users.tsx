import React, { useState, useContext } from "react";
import CreateIcon from "@mui/icons-material/Create";
import {
  Box,
  Button,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Context } from "../context/GlobalContext";
import { makeStyles } from "@mui/styles";

type User = {
  Id: number;
  Name: string;
  Surname: string;
  Email: string;
  Password: string;
  Role: string;
  SubscribedEvents: number[];
};

// Creating styles
const useStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  table: {
    minWidth: 650,
  },
  snackbar: {
    bottom: "104px",
  },
});

const Users = () => {
  const classes = useStyles();
  const { state } = useContext(Context);
  // Defining a state named rows
  // which we can update by calling on setRows function
  const [rows, setRows] = useState<User[]>(state.users);

  // Initial states
  const [open, setOpen] = React.useState(false);
  const [isEdit, setEdit] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [showConfirm, setShowConfirm] = React.useState(false);

  // Function For adding new row object
  const handleAdd = () => {
    setRows([
      ...rows,
      {
        Id: rows[-1].Id + 1,
        Name: "",
        Surname: "",
        Email: "",
        Password: "",
        Role: "user",
        SubscribedEvents: [],
      },
    ]);
    setEdit(true);
  };

  // Function to handle edit
  const handleEdit = () => {
    // If edit mode is true setEdit will
    // set it to false and vice versa
    setEdit(!isEdit);
  };

  // Function to handle save
  const handleSave = () => {
    setEdit(!isEdit);
    setRows(rows);
    console.log("saved : ", rows);
    setDisable(true);
    setOpen(true);
  };

  // The handleInputChange handler can be set up to handle
  // many different inputs in the form, listen for changes
  // to input elements and record their values in state
  const handleInputChange = (e: any, index: number) => {
    setDisable(false);
    const { name, value } = e.target;
    const list = [...rows];
    //list[index][name] = value;
    setRows(list);
  };

  // Showing delete confirmation to users
  const handleConfirm = () => {
    setShowConfirm(true);
  };

  // Handle the case of delete confirmation where
  // user click yes delete a specific row of id:i
  const handleRemoveClick = (i: number) => {
    const list = [...rows];
    list.splice(i, 1);
    setRows(list);
    setShowConfirm(false);
  };

  // Handle the case of delete confirmation
  // where user click no
  const handleNo = () => {
    setShowConfirm(false);
  };

  return (
    <Container>
      <TableBody>
        <Box margin={1}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              {isEdit ? (
                <div>
                  <Button onClick={handleAdd}>
                    <AddBoxIcon onClick={handleAdd} />
                    ADD
                  </Button>
                  {rows.length !== 0 && (
                    <div>
                      {disable ? (
                        <Button onClick={handleSave}>
                          <DoneIcon />
                          SAVE
                        </Button>
                      ) : (
                        <Button onClick={handleSave}>
                          <DoneIcon />
                          SAVE
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <Button onClick={handleAdd}>
                    <AddBoxIcon onClick={handleAdd} />
                    ADD
                  </Button>
                  <Button onClick={handleEdit}>
                    <CreateIcon />
                    EDIT
                  </Button>
                </div>
              )}
            </div>
          </div>
          <TableRow> </TableRow>

          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Subscribed Events</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: User, i: number) => {
                return (
                  <>
                    <TableRow>
                      {isEdit ? (
                        <>
                          <TableCell>
                            <input
                              value={row.Name}
                              name="firstname"
                              onChange={(e) => handleInputChange(e, i)}
                            />
                          </TableCell>
                          <TableCell>
                            <input
                              value={row.Surname}
                              name="lastname"
                              onChange={(e) => handleInputChange(e, i)}
                            />
                          </TableCell>
                          <TableCell>
                            <input
                              value={row.Email}
                              name="email"
                              onChange={(e) => handleInputChange(e, i)}
                            />
                          </TableCell>
                          <TableCell>
                            <input
                              value={row.Role}
                              name="email"
                              onChange={(e) => handleInputChange(e, i)}
                            />
                          </TableCell>
                        </>
                      ) : (
                        <>
                          <TableCell component="th" scope="row">
                            {row.Id}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.Name}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.Surname}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.Email}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.Role}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.SubscribedEvents.join(", ")}
                          </TableCell>
                        </>
                      )}
                      {isEdit ? (
                        <Button className="mr10" onClick={handleConfirm}>
                          <ClearIcon />
                        </Button>
                      ) : (
                        <Button className="mr10" onClick={handleConfirm}>
                          <DeleteOutlineIcon />
                        </Button>
                      )}

                      {showConfirm && (
                        <div>
                          <Dialog
                            open={showConfirm}
                            onClose={handleNo}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle id="alert-dialog-title">
                              {"Confirm Delete"}
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                Are you sure to delete
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button
                                onClick={() => handleRemoveClick(i)}
                                color="primary"
                                autoFocus
                              >
                                Yes
                              </Button>
                              <Button
                                onClick={handleNo}
                                color="primary"
                                autoFocus
                              >
                                No
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </div>
                      )}
                    </TableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </TableBody>
    </Container>
  );
};

export default Users;
