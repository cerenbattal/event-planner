import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
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

type Event = {
  Id: number;
  EventTypeId: number;
  SubscribedUserIds: number[];
  Name: string;
  DescriptionEN: string;
  DescriptionDE: string;
  Start: string;
  End: string;
  Location: string;
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

const Events: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { state, deleteEvent, createEvents } = useContext(Context);
  const [rows, setRows] = useState<any[]>(state.events);
  const [isEdit, setEdit] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [showConfirm, setShowConfirm] = React.useState(false);

  // Function For adding new row object
  const handleAdd = () => {
    setRows([
      ...rows,
      {
        Id: rows.length + 1,
        EventTypeId: 1,
        SubscribedUserIds: [],
        Name: "",
        DescriptionEN: "",
        DescriptionDE: "",
        Start: "",
        End: "",
        Location: "",
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
    createEvents(rows);
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
  const handleRemoveClick = (event: any) => {
    deleteEvent(event);
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
                <TableCell>{t("NAME")}</TableCell>
                <TableCell>{t("LOCATION")}</TableCell>
                <TableCell>{t("START_DATE")}</TableCell>
                <TableCell>{t("END_DATE")}</TableCell>
                <TableCell>{t("DESC-EN")}</TableCell>
                <TableCell>{t("DESC-DE")}</TableCell>
                <TableCell>{t("SUBSCRIBED_USERS_IDS")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: Event, i: number) => {
                return (
                  <>
                    <TableRow>
                      {isEdit ? (
                        <>
                          <TableCell>
                            <input
                              value={row.Name}
                              name="Name"
                              onChange={(e) => handleInputChange(e, i)}
                            />
                          </TableCell>
                          <TableCell>
                            <input
                              value={row.Location}
                              name="Location"
                              onChange={(e) => handleInputChange(e, i)}
                            />
                          </TableCell>
                          <TableCell>
                            <input
                              value={row.Start}
                              name="Start"
                              onChange={(e) => handleInputChange(e, i)}
                            />
                          </TableCell>
                          <TableCell>
                            <input
                              value={row.End}
                              name="End"
                              onChange={(e) => handleInputChange(e, i)}
                            />
                          </TableCell>
                          <TableCell>
                            <input
                              value={row.DescriptionEN}
                              name="DescriptionEN"
                              onChange={(e) => handleInputChange(e, i)}
                            />
                          </TableCell>
                          <TableCell>
                            <input
                              value={row.DescriptionDE}
                              name="DescriptionDE"
                              onChange={(e) => handleInputChange(e, i)}
                            />
                          </TableCell>
                        </>
                      ) : (
                        <>
                          <TableCell>{row.Id}</TableCell>
                          <TableCell component="th" scope="row">
                            {row.Name}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.Location}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.Start}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.End}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.DescriptionEN}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.DescriptionDE}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.SubscribedUserIds.join(", ")}
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

export default Events;
