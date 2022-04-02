import { GET_CURRENCIES, ADD_EXPENSE, REMOVE_EXPENSE,
  ACTIVE_EDIT_BUTTON, 
  DISABLE_EDIT_BUTTON} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editBtn: false,
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
  case ACTIVE_EDIT_BUTTON:
    return {
      ...state,
      editBtn: true,
    };
  case DISABLE_EDIT_BUTTON:
    return {
      ...state,
      editBtn: false,
    };
  default:
    return state;
  }
};

export default wallet;
