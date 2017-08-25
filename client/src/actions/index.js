import axios from 'axios';
import { FETCH_USER } from './types';

//old way using .then
// export const fetchUser = () => {
//   return function(dispatch) {
//     axios.get('/api/current_user').then(res => dispatch({ type: FETCH_USER, payload: res }));
//   };
// };

// using async
export const fetchUser = () => async dispatch => {
  const current_user = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: current_user.data });
};

// //code golf
// export const fetchUser = () => async dispatch =>
//   dispatch({ type: FETCH_USER, payload: await axios.get('/api/current_user') });
