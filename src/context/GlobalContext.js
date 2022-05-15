import createDataContext from './createDataContext';

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'create_users':
      return { ...state, users: action.payload.users };

    case 'create_events':
      return { ...state, events: action.payload.events };

    case 'create_event_types':
      return { ...state, eventTypes: action.payload.eventTypes };

    case 'add_user':
      state.users.push(action.payload.user);
      const newUserList = state.users;
      return { ...state, users: newUserList };

    case 'add_event':
      state.events.push(action.payload.event);
      const newEventList = state.events;
      return { ...state, users: newEventList };

    case 'update_user':
      const editedUsers = state.users
      editedUsers[action.payload.user.Id] = action.payload.user;
      return { ...state, users: editedUsers }

    case 'update_event':
      const editedEventList = state.events
      editedEventList[action.payload.event.Id] = action.payload.event;
      return { ...state, events: editedEventList }

    case 'delete_user':
      return { ...state, users: state.users.filter(user => user.Id !== action.payload.user.Id) };

    case 'delete_event':
      return { ...state, events: state.events.filter(event => event.Id !== action.payload.event.Id) };

    case 'subscribe_event':
      const editedEvents = state.events;
      const eventId = action.payload.eventId;
      const userId = action.payload.userId;
      const event = state.events.find(event => {
        return event.Id === eventId
      });
      if (!(event.SubscribedUserIds.includes(userId))) {
        event.SubscribedUserIds.push(userId)
      }
      state.authUser.SubscribedEvents.push(eventId);
      editedEvents[action.payload.eventId].SubscribedUserIds = event.SubscribedUserIds;
      return { ...state, events: editedEvents }

    case 'authorized_user':
      return { ...state, isAuth: true, authUser: action.payload.user };

    case 'unauthorized_user':
      return { ...state, isAuth: false, authUser: '' };

    case 'set_lang':
      return { ...state, language: action.payload.language };

    default:
      return state;
  }
};

const createUsers = dispatch => (users) => {
  dispatch({ type: 'create_users', payload: { users: users } });
};

const createEvents = dispatch => (events) => {
  dispatch({ type: 'create_events', payload: { events: events } });
};

const createEventTypes = dispatch => (eventTypes) => {
  dispatch({ type: 'create_event_types', payload: { eventTypes: eventTypes } });
};

const deleteUser = dispatch => (user) => {
  dispatch({ type: 'delete_user', payload: { user: user } });
};

const deleteEvent = dispatch => (event) => {
  dispatch({ type: 'delete_event', payload: { event: event } });
};

const subscribeEvent = dispatch => (userId, eventId) => {
  dispatch({
    type: 'subscribe_event',
    payload: {
      userId: userId,
      eventId: eventId
    }
  });
};

const authorizeUser = dispatch => (user) => {
  dispatch({ type: 'authorized_user', payload: { user: user } });
};

const unauthorizeUser = dispatch => (user) => {
  dispatch({ type: 'unauthorized_user', payload: { user: user } });
};

const setLanguage = dispatch => (lang) => {
  dispatch({ type: 'set_lang', payload: { language: lang } });
};

export const { Provider, Context } = createDataContext(
  globalReducer,
  { createUsers, createEvents, createEventTypes, deleteUser, deleteEvent, subscribeEvent, authorizeUser, unauthorizeUser, setLanguage },
  { users: [], isAuth: false, authUser: '', events: [], eventTypes: [], language: "en" }
);