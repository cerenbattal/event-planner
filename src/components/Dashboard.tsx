import React from "react";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import EventCard from "./EventCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const dashboardStyle = {
  padding: "30px",
};

type Event = {
  Id: number;
  EventTypeId: number;
  SubscribedUserIds: number[];
  Name: String;
  DescriptionEN: String;
  DescriptionDE: String;
  Start: String;
  End: String;
  Location: String;
};

type Props = {
  subscribedEvents: Event[];
};

/**
 * @param {{
 * type: Props
 * }} props Props for the component
 * @return {React.Component}
 */
const Dashboard: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  return (
    <Container style={dashboardStyle}>
      <Typography gutterBottom variant="h5" component="div">
        {t("SUBSCRIBED_EVENTS")}
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 0.5, md: 0.5 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {props.subscribedEvents?.map((event: Event, index: number) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <EventCard event={event} subscription={false} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
export default Dashboard;
