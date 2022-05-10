import React from "react";
import "./App.css";
// import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AppNav from "./components/AppNav";

/**
 * App component
 * @return {string}
 */
function App() {
  return (
    <div className="App">
      <AppNav />
      <Dashboard />
    </div>
  );
}

export default App;
