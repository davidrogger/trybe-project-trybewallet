export const GET_USER_EMAIL = 'GET_USER_EMAIL';

const INITIAL_STATE = {
  email: '',
};

export const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_USER_EMAIL:
    return state;
  default:
    return state;
  }
};
