import { GET_CURRENCIES, ADD_EXPENSE, REMOVE_EXPENSE,
  ACTIVE_EDIT_BUTTON, DISABLE_EDIT_BUTTON, EDIT_EXPENSE } from '../actions';

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
  case EDIT_EXPENSE: {
    const expenseLength = state.expenses.length;
    const expenseIndex = state.expenses.findIndex(({ id }) => id === action.id);
    const beforeExpense = state.expenses.slice(0, expenseIndex);
    const afterExpense = state.expenses.slice(expenseIndex + 1, expenseLength);
    const editedExpense = { ...action.expense,
      id: action.id,
      exchangeRates: action.exchangeRates };
    const expenses = [...beforeExpense, ...editedExpense, ...afterExpense];

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
