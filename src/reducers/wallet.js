export const GET_WALLET_DATA = 'GET_WALLET_DATA';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_WALLET_DATA:
    return state;
  default:
    return state;
  }
};
