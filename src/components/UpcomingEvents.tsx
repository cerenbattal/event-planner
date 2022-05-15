import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import EventCard from "./EventCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Context } from "../context/GlobalContext";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const dashboardStyle = {
  padding: "30px",
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

/**
 * Upcoming event list view
 * @return {JSX.Element}
 */
const UpcomingEvents: React.FC = (): JSX.Element => {
  const { state } = useContext(Context);
  const [upcomingEvents, setUpcomingEvents] = useState<[] | undefined>();
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);

  const getOpenState = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const getUpcomingEvents = () => {
    const now = new Date();
    return state.events.filter((event: any) => new Date(event.Start) > now);
  };

  const checkUserSubscribedEvent = (event: any) => {
    const eventId = event.Id;
    return state.authUser.SubscribedEvents.includes(eventId);
  };

  useEffect(() => {
    const events = getUpcomingEvents();
    setUpcomingEvents(events);
  }, []);

  return (
    <Container style={dashboardStyle}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {t("SUBSCRIBED")}
        </Alert>
      </Snackbar>
      <Typography gutterBottom variant="h5" component="div">
        {t("UPCOMING_EVENTS_HEAD")}
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 0.5, md: 0.5 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {upcomingEvents?.map((event: Event, index: number) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <EventCard
                event={event}
                subscription={checkUserSubscribedEvent(event) ? false : true}
                subscribed={checkUserSubscribedEvent(event)}
                openSnackbar={getOpenState}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default UpcomingEvents;
