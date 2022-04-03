import { GET_CURRENCIES, ADD_EXPENSE, REMOVE_EXPENSE,
  ACTIVE_EDIT_BUTTON, DISABLE_EDIT_BUTTON, EDIT_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editBtn: false,
  expenseSelected: {},
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
      expenseSelected: action.selectedExpense,
    };
  case DISABLE_EDIT_BUTTON:
    return {
      ...state,
      editBtn: false,
      expenseSelected: {},
    };
  case EDIT_EXPENSE: {
    const expenseLength = state.expenses.length;
    const expenseIndex = state.expenses.findIndex(({ id }) => id === action.expense.id);
    const beforeExpense = state.expenses.slice(0, expenseIndex);
    const afterExpense = state.expenses.slice(expenseIndex + 1, expenseLength);
    const editedExpense = { ...action.editInfo,
      id: action.expense.id,
      exchangeRates: action.expense.exchangeRates };
    const expenses = [...beforeExpense, editedExpense, ...afterExpense];
    return {
      ...state,
      expenses,
      editBtn: false,
      expenseSelected: {},
    };
  }
  default:
    return state;
  }
};

export default wallet;
