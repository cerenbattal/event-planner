import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const dashboardStyle = {
  padding: "30px",
};

/**
 * Not found view
 * @return {JSX.Element}
 */
const NotFound: React.FC = (): JSX.Element => {
  return (
    <Container style={dashboardStyle}>
      <Typography gutterBottom variant="h1" component="div">
        {"404 Not Found :("}
      </Typography>
    </Container>
  );
};

export default NotFound;
