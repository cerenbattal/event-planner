import React from "react";
import Dashboard from "./Dashboard";

/**
 * Gets subscribed events and return dashboard with this data
 * @return {React.FC}
 */
function Home() {
  const subscribedEvents = ["Admin", "Admin", "Admin"];

  return <Dashboard subscribedEvents={subscribedEvents} />;
}

export default Home;
