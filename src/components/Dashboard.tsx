import React from "react";
import EventCard from "./EventCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const dashboardStyle = {
  padding: "50px",
};

/**
 * Dashboard component
 * @return {React.Component}
 */
function Dashboard() {
  return (
    <Box style={dashboardStyle} sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 0.5, md: 0.5 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <EventCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Dashboard;
