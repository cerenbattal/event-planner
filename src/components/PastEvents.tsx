import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import EventCard from "./EventCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Context } from "../context/GlobalContext";

const dashboardStyle = {
  padding: "30px",
};

/**
 * Past event list view
 * @return {JSX.Element}
 */
const PastEvents: React.FC = (): JSX.Element => {
  const { state } = useContext(Context);
  const [pastEvents, setPastEvents] = useState<[] | undefined>();
  const { t } = useTranslation();

  const getPastEvents = () => {
    const now = new Date();
    return state.events.filter((event: any) => new Date(event.Start) < now);
  };

  useEffect(() => {
    const events = getPastEvents();
    setPastEvents(events);
  }, []);

  return (
    <Container style={dashboardStyle}>
      <Typography gutterBottom variant="h5" component="div">
        {t("PAST_EVENTS_HEAD")}
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 0.5, md: 0.5 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {pastEvents?.map((event: Event, index: number) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <EventCard event={event} subscription={false} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default PastEvents;
