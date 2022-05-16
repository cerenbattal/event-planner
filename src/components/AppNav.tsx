import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
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
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Context } from "../context/GlobalContext";
import { NavLink } from "react-router-dom";

const FormStyle = {
  backgroundColor: "white",
  border: "none",
};

/**
 * App navigation view
 * @return {JSX.Element}
 */
const AppNav: React.FC = (): JSX.Element => {
  const [elNav, setElNav] = React.useState<null | HTMLElement>(null);
  const [elUser, setElUser] = React.useState<null | HTMLElement>(null);
  const { state, unauthorizeUser, setLanguage } = useContext(Context);
  const { t, i18n } = useTranslation();

  const userPages = [
    {
      id: 1,
      name: t("HOME"),
      link: "/home",
    },
    {
      id: 2,
      name: t("UPCOMING_EVENTS"),
      link: "/upcoming-events",
    },
    {
      id: 3,
      name: t("PAST_EVENTS"),
      link: "/past-events",
    },
  ];

  const adminPages = [
    {
      id: 1,
      name: t("EVENTS"),
      link: "/events",
    },
    {
      id: 2,
      name: t("USERS"),
      link: "/users",
    },
    {
      id: 3,
      name: t("EVENT_TYPES"),
      link: "/event-types",
    },
  ];

  const settings = [
    {
      id: 1,
      name: t("PROFILE"),
      link: "/profile",
    },
    {
      id: 2,
      name: t("LOGOUT"),
      link: "/login",
    },
  ];

  const handleLanguageChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value as string);
    setLanguage(event.target.value as string);
  };

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

  const populateNavOptions = () => {
    const mapArr = state.authUser.Role === "admin" ? adminPages : userPages;

    return mapArr.map((page) => (
      <NavLink to={page.link} style={{ textDecoration: "none" }} key={page.id}>
        <Button
          key={page.id}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page.name}
        </Button>
      </NavLink>
    ));
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
            Event Planner
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
              EVENT PLANNER
            </Typography>
          </NavLink>

          {state.isAuth ? (
            <>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {populateNavOptions()}
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
                      key={setting.id}
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
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
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
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <FormControl
              style={FormStyle}
              sx={{ m: 1, minWidth: 120 }}
              size="small"
              fullWidth
            >
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleLanguageChange}
                label="Language"
              >
                <MenuItem value={"en"}>EN</MenuItem>
                <MenuItem value={"de"}>DE</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppNav;
