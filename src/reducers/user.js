import { GET_USER_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_USER_EMAIL:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
