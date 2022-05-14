import React from "react";
import EventCard from "./EventCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const dashboardStyle = {
  padding: "50px",
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
 * @param {Props}
 * @param {{
 * type: Props
 * }} props Props for the component
 * @return {React.Component}
 */
function Dashboard(props: Props) {
  return (
    <Box style={dashboardStyle} sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 0.5, md: 0.5 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {props.subscribedEvents.map((event: Event, index: number) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Dashboard;
