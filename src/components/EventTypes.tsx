import React, { useState, useContext } from "react";
import CreateIcon from "@mui/icons-material/Create";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useTranslation } from "react-i18next";
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

const EventTypes: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { state, deleteUser, createUsers } = useContext(Context);
  const [rows, setRows] = useState<any[]>(state.eventTypes);
  const [isEdit, setEdit] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [showConfirm, setShowConfirm] = React.useState(false);

  // Function For adding new row object
  const handleAdd = () => {
    setRows([
      ...rows,
      {
        Id: rows.length + 1,
        Name: "",
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
    createUsers(rows);
  };

  // The handleInputChange handler can be set up to handle
  // many different inputs in the form, listen for changes
  // to input elements and record their values in state
  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) => {
    setDisable(false);
    const { name, value } = e.target;
    const list = [...rows];
    list[index][name] = value;
    setRows(list);
  };

  // Showing delete confirmation to users
  const handleConfirm = () => {
    setShowConfirm(true);
  };

  // Handle the case of delete confirmation where
  // user click yes delete a specific row of id:i
  const handleRemoveClick = (user: any) => {
    deleteUser(user);
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
                    {t("ADD")}
                  </Button>
                  {rows.length !== 0 && (
                    <div>
                      {disable ? (
                        <Button onClick={handleSave}>
                          <DoneIcon />
                          {t("SAVE")}
                        </Button>
                      ) : (
                        <Button onClick={handleSave}>
                          <DoneIcon />
                          {t("SAVE")}
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <Button onClick={handleAdd}>
                    <AddBoxIcon onClick={handleAdd} />
                    {t("ADD")}
                  </Button>
                  <Button onClick={handleEdit}>
                    <CreateIcon />
                    {t("EDIT")}
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
                <TableCell>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: any, i: number) => {
                return (
                  <>
                    <TableRow>
                      {isEdit ? (
                        <>
                          <TableCell>
                            <input
                              value={row.Id}
                              name="Id"
                              onChange={(e) => handleInputChange(e, i)}
                            />
                          </TableCell>
                          <TableCell>
                            <input
                              value={row.Name}
                              name="Name"
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
                              {t("CONFIRM_DELETE")}
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                {t("DELETE")}
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button
                                onClick={() => handleRemoveClick(row)}
                                color="primary"
                                autoFocus
                              >
                                {t("YES")}
                              </Button>
                              <Button
                                onClick={handleNo}
                                color="primary"
                                autoFocus
                              >
                                {t("NO")}
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

export default EventTypes;
