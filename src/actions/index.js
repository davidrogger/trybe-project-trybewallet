import { GET_USER_EMAIL } from '../reducers/user';

const getUserEmail = (email) => ({ type: GET_USER_EMAIL, email });

export default getUserEmail;
