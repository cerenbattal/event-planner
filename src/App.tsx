import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "./context/GlobalContext";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import AppNav from "./components/AppNav";
import UpcomingEvents from "./components/UpcomingEvents";
import PastEvents from "./components/PastEvents";
import Profile from "./components/Profile";
import AdminHome from "./components/AdminHome";
import Welcome from "./components/Welcome";
import Events from "./components/Events";
import Users from "./components/Users";
import NotFound from "./components/NotFound";
import EditProfile from "./components/EditProfile";
import EventTypes from "./components/EventTypes";

/**
 * App component
 * @return {string}
 */
const App: React.FC = (): JSX.Element => {
  const { state } = useContext(Context);

  const PrivateRoute = ({ children }: any) => {
    return state.isAuth ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <AppNav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/upcoming-events"
          element={
            <PrivateRoute>
              <UpcomingEvents />
            </PrivateRoute>
          }
        />
        <Route
          path="/past-events"
          element={
            <PrivateRoute>
              <PastEvents />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminHome />
            </PrivateRoute>
          }
        />
        <Route
          path="/events"
          element={
            <PrivateRoute>
              <Events />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route
          path="/event-types"
          element={
            <PrivateRoute>
              <EventTypes />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
