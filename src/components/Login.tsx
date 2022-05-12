import React, { useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import { Context } from "../context/GlobalContext";
import Users from "../entities/Users.json";
import Events from "../entities/Events.json";

import back from "../images/back.jpeg";

const Login2 = () => {
  const { state, createUsers, createEvents, authorizeUser } =
    useContext(Context);
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const navigate = useNavigate();

  const fetchUser = async () => {
    createUsers(Users);
  };

  const fetchEvents = async () => {
    createEvents(Events);
  };

  useEffect(() => {
    fetchUser();
    fetchEvents();
  }, []);

  const handleLogin = () => {
    if (!email || !password) {
      console.log("mail and password are required 400");
    } else {
      const userList = Users;
      console.log(userList);
      const foundUser = userList.find((user: any) => user.Email === email);

      if (!foundUser) {
        console.log("unauthorized 401");
      } else {
        const match = foundUser?.Password === password;
        if (match) {
          // TODO: user can login
          console.log("user authorized");
          authorizeUser(foundUser);
          navigate("/home");
        } else {
          console.log("mail or password are wrong");
        }
      }
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${back})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => handleLogin()}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Login2;
