export const GET_USER_EMAIL = 'GET_USER_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const getUserEmail = (email) => ({ type: GET_USER_EMAIL, email });

export const getCurrencies = (currencies) => ({ type: GET_CURRENCIES, currencies });

export const addExpense = (expenses, exchangeRates) => (
  { type: ADD_EXPENSE, expenses, exchangeRates });

export const fetchAPI = (type, expenseData) => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const currencies = Object.keys(data).filter((currencie) => currencie !== 'USDT');
    const exchangeRates = currencies.reduce((acc, codeName) => {
      const { code, name, ask } = data[codeName];
      acc[codeName] = { code, name, ask };
      return acc;
    }, {});
    if (type === 'currencies') return dispatch(getCurrencies(currencies));
    if (type === 'exchangeRates') return dispatch(addExpense(expenseData, exchangeRates));
  } catch (error) {
    console.log(`Erro encontrado: ${error}`);
  }
};
