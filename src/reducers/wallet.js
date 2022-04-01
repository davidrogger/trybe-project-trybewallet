import { GET_CURRENCIES, ADD_EXPENSE, REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses,
        { ...action.expenses, exchangeRates: action.exchangeRates }],
    };
  case REMOVE_EXPENSE: {
    const expenses = state.expenses.filter(({ id }) => id !== action.id);
    return {
      ...state,
      expenses,
    };
  }
  default:
    return state;
  }
};

export default wallet;
