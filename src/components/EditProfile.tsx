import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

import { useNavigate } from "react-router-dom";
import { Context } from "../context/GlobalContext";

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

const Profile: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState<string | undefined>();
  const [name, setName] = useState<string | undefined>();
  const [surname, setSurname] = useState<string | undefined>();
  const [isError, setIsError] = useState<boolean | undefined>(false);
  const { state } = useContext(Context);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleUpdateProfile = () => {
    if (!email || !name || !surname) {
      setIsError(true);
    } else {
      setIsError(false);
      state.authUser.Email = email;
      state.authUser.Name = name;
      state.authUser.Surname = surname;
      navigate("/profile");
    }
  };

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
                  {isError ? (
                    <TextField
                      error
                      label="Name"
                      placeholder="Enter name"
                      fullWidth
                      helperText={t("NAME_REQ")}
                      onChange={(e) => setName(e.target.value)}
                    />
                  ) : (
                    <TextField
                      label="Name"
                      placeholder="Enter name"
                      fullWidth
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}
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
                  {isError ? (
                    <TextField
                      error
                      label="Surname"
                      placeholder="Enter surname"
                      fullWidth
                      helperText={t("SURNAME_REQ")}
                      onChange={(e) => setSurname(e.target.value)}
                    />
                  ) : (
                    <TextField
                      label="Surname"
                      placeholder="Enter surname"
                      fullWidth
                      onChange={(e) => setSurname(e.target.value)}
                    />
                  )}
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
                  {isError ? (
                    <TextField
                      error
                      label="Email"
                      placeholder="Enter email"
                      fullWidth
                      helperText={t("MAIL_REQ")}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  ) : (
                    <TextField
                      label="Email"
                      placeholder="Enter email"
                      fullWidth
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  )}
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
          onClick={() => handleUpdateProfile()}
        >
          {t("SAVE")}
        </Button>
      </Container>
    </>
  );
};

export default Profile;
