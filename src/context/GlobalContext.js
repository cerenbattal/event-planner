import createDataContext from './createDataContext';


const globalReducer = (state, action) => {
  switch (action.type) {
    case 'create_users':
      return { ...state, users: action.payload.users };
    case 'create_events':
      return { ...state, events: action.payload.events };
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
      editedEvents[action.payload.eventId].SubscribedUserIds = event.SubscribedUserIds;
      return { ...state, events: editedEvents }
    case 'authorized_user':
      return { ...state, isAuth: true, authUser: action.payload.user };
    case 'unauthorized_user':
      return { ...state, isAuth: false, authUser: '' };
    case 'update_profile':
      console.log("updated profile")

    default:
      return state;
  }

  //   case 'add_answer':
  //     state.answers.push(action.payload);
  //     let newAnswers = state.answers;
  //     return { ...state, answers: newAnswers };

  //   case 'update_answer':
  // let editedAnswers = state.answers
  // editedAnswers[action.payload.id].answer = action.payload.updatedAnswer;
  // return { ...state, answers: editedAnswers }

  //   case 'update_question':
  //     return { ...state, question: action.payload.updatedQuestion }

  //   case 'delete_answer':
  //     return { ...state, answers: state.answers.filter(ans => ans.id !== action.payload.id) };

  //   case 'add_vote':
  //     let newAnswersArray = state.answers.map(ans => {
  //       return action.payload.id === ans.id ? Object.assign({}, ans, { score: ans.score + 1 }) : ans;
  //     });
  //     return { ...state, answers: newAnswersArray, voteCount: state.voteCount + 1 }

  //   case 'reset_poll':
  //     return { question: '', answers: [], isCreated: false };

  //   default:
  //     return state;
  // }
};

const createUsers = dispatch => (users) => {
  dispatch({ type: 'create_users', payload: { users: users } });
};

const createEvents = dispatch => (events) => {
  dispatch({ type: 'create_events', payload: { events: events } });
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

const updateProfile = dispatch => () => {
  dispatch({ type: 'update_profile', payload: { userId: "" } });
};

export const { Provider, Context } = createDataContext(
  globalReducer,
  { createUsers, createEvents, subscribeEvent, authorizeUser, unauthorizeUser, updateProfile },
  { users: [], isAuth: false, authUser: '', events: [] }
);