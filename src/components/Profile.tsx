import React from "react";
import { useTranslation } from "react-i18next";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { NavLink } from "react-router-dom";

const profileHeader = {
  display: "flex",
  flexDirection: "row",
  alignItems: "baseline",
} as React.CSSProperties;

const profileContent = {
  display: "flex",
  flexDirection: "row",
  alignItems: "baseline",
  marginTop: "50px",
} as React.CSSProperties;

const Profile = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container fixed>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", padding: "50px" }}>
          <div style={profileHeader}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 72, height: 72 }}
            />
            <Typography gutterBottom variant="h5" component="div">
              {t("PROFILE")}
            </Typography>
          </div>

          <NavLink to="/edit-profile" style={{ textDecoration: "none" }}>
            <Typography gutterBottom variant="subtitle1" component="div">
              {t("EDIT_PROFILE")}
            </Typography>
          </NavLink>

          <div style={profileContent}>
            <Box>
              <Grid
                container
                spacing={{ xs: 0, md: 0 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid
                  container
                  spacing={{ xs: 0, md: 0 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {t("USERNAME")}
                  </Typography>
                </Grid>
                <Grid
                  container
                  spacing={{ xs: 0, md: 0 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Typography gutterBottom variant="body1" component="div">
                    cerenbattal
                  </Typography>
                </Grid>
                <Grid
                  container
                  spacing={{ xs: 0, md: 0 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {t("EMAIL")}
                  </Typography>
                </Grid>
                <Grid
                  container
                  spacing={{ xs: 0, md: 0 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Typography gutterBottom variant="body1" component="div">
                    cerenbattal97@gmail.com
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Profile;
