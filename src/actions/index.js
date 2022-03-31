export const GET_USER_EMAIL = 'GET_USER_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const getUserEmail = (email) => ({ type: GET_USER_EMAIL, email });

export const getCurrencies = (currencies) => ({ types: GET_CURRENCIES, currencies });
