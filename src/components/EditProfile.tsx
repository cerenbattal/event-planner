import React, { useState, useEffect, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

import { NavLink, useNavigate } from "react-router-dom";
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

const Profile = () => {
  const [email, setEmail] = useState<string | undefined>();
  const [username, setUsername] = useState<string | undefined>();
  const { state, updateProfile } = useContext(Context);
  const navigate = useNavigate();

  const handleUpdateProfile = () => {
    if (!email || !username) {
      console.log("mail and password are required 400");
    } else {
      updateProfile();
      navigate("/profile");
    }
  };

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
              Profile
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
                    Username
                  </Typography>
                </Grid>
                <Grid
                  container
                  spacing={{ xs: 0, md: 0 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <TextField
                    label="Username"
                    placeholder="Enter username"
                    fullWidth
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Grid>
                <Grid
                  container
                  spacing={{ xs: 0, md: 0 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    Email
                  </Typography>
                </Grid>
                <Grid
                  container
                  spacing={{ xs: 0, md: 0 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <TextField
                    label="Email"
                    placeholder="Enter email"
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                  />
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
          Save
        </Button>
      </Container>
    </>
  );
};

export default Profile;
