import React, { useState, useEffect, useContext } from "react";
import Dashboard from "./Dashboard";
import { Context } from "../context/GlobalContext";

type Event = {
  Id: number;
  EventTypeId: number;
  SubscribedUserIds: number[];
  Name: String;
  DescriptionEN: String;
  DescriptionDE: String;
  Start: String;
  End: String;
  Location: String;
};

/**
 * Gets subscribed events and return dashboard with this data
 * @return {React.FC}
 */
const Home: React.FC = (): JSX.Element => {
  const { state } = useContext(Context);
  const [subscribedEvents, setSubscribedEvents] = useState<Event[]>([]);

  useEffect(() => {
    getSubscribedEvents();
  }, []);

  const findEventById = (eventId: any) => {
    return state.events.find((event: any) => {
      return event.Id === eventId;
    });
  };

  const getSubscribedEvents = () => {
    state.authUser.SubscribedEvents.forEach((eventId: any) => {
      const foundEvent = findEventById(eventId);
      setSubscribedEvents((subscribedEvents) => [
        ...subscribedEvents,
        foundEvent,
      ]);
    });
  };

  return subscribedEvents?.length > 0 ? (
    <Dashboard subscribedEvents={subscribedEvents} />
  ) : (
    <div>no events</div>
  );
};

export default Home;
