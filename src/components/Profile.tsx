import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Context } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

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

/**
 * Profile view
 * @return {JSX.Element}
 */
const Profile: React.FC = (): JSX.Element => {
  const { state } = useContext(Context);
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <Container fixed>
        <Box sx={{ bgcolor: "#cfe8fc", height: "71vh", padding: "50px" }}>
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
                    {t("NAME")}
                  </Typography>
                </Grid>
                <Grid
                  container
                  spacing={{ xs: 0, md: 0 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Typography gutterBottom variant="body1" component="div">
                    {state.authUser.Name}
                  </Typography>
                </Grid>
                <Grid
                  container
                  spacing={{ xs: 0, md: 0 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {t("SURNAME")}
                  </Typography>
                </Grid>
                <Grid
                  container
                  spacing={{ xs: 0, md: 0 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Typography gutterBottom variant="body1" component="div">
                    {state.authUser.Surname}
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
                    {state.authUser.Email}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Box>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          onClick={() => navigate("/edit-profile")}
        >
          {t("EDIT")}
        </Button>
      </Container>
    </>
  );
};

export default Profile;
