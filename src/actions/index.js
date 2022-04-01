export const GET_USER_EMAIL = 'GET_USER_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const getUserEmail = (email) => ({ type: GET_USER_EMAIL, email });

export const getCurrencies = (currencies) => ({ type: GET_CURRENCIES, currencies });

export const addExpense = (expenses) => ({ type: ADD_EXPENSE, expenses });

export const fetchAPI = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const currencies = Object.keys(data).filter((currencie) => currencie !== 'USDT');
    return dispatch(getCurrencies(currencies));
  } catch (error) {
    console.log(`Erro encontrado: ${error}`);
  }
};
