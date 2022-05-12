import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { NavLink } from "react-router-dom";
import { Context } from "../context/GlobalContext";

const userPages = [
  {
    id: 1,
    name: "Home",
    link: "/home",
  },
  {
    id: 2,
    name: "Upcoming Events",
    link: "/upcoming-events",
  },
  {
    id: 3,
    name: "Past Events",
    link: "/past-events",
  },
];

const adminPages = [
  {
    id: 1,
    name: "Events",
    link: "/events",
  },
  {
    id: 2,
    name: "Users",
    link: "/users",
  },
  {
    id: 3,
    name: "Event Types",
    link: "/event-types",
  },
];

const settings = [
  {
    id: 1,
    name: "Profile",
    link: "/profile",
  },
  {
    id: 2,
    name: "Logout",
    link: "/login",
  },
];

const AppNav = () => {
  const [elNav, setElNav] = React.useState<null | HTMLElement>(null);
  const [elUser, setElUser] = React.useState<null | HTMLElement>(null);

  const { state, unauthorizeUser } = useContext(Context);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setElNav(null);
  };

  const handleCloseUserMenu = () => {
    setElUser(null);
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    unauthorizeUser();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={elNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(elNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {userPages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <NavLink to="/home" style={{ textDecoration: "none" }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </NavLink>

          {state.isAuth ? (
            <>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {userPages.map((page) => (
                  <NavLink to={page.link} style={{ textDecoration: "none" }}>
                    <Button
                      key={page.id}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page.name}
                    </Button>
                  </NavLink>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={elUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(elUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <NavLink
                      to={setting.link}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <MenuItem
                        key={setting.id}
                        onClick={
                          setting.name === "Logout"
                            ? handleLogout
                            : handleCloseUserMenu
                        }
                      >
                        <Typography textAlign="center">
                          {setting.name}
                        </Typography>
                      </MenuItem>
                    </NavLink>
                  ))}
                </Menu>
              </Box>
            </>
          ) : (
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                  }}
                >
                  Login
                </Button>
              </NavLink>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppNav;
