import axios from 'axios';
import { BASE_URL } from '../constants/BASE_URL';
import { getUserdetails } from '../store/actions/loginAction';
export const loginApi = (data) => (dispatch) => {
  return axios
    .post(`${BASE_URL}/logIn`, data)
    .then((res) => dispatch(getUserdetails(res.data)));
};

// import axios from 'axios';
// import { BASE_URL } from '../constants/BASE_URL';
// import { getUserdetails } from '../store/actions/loginAction';
export const logInApi = (data) => {
  //  dispatch =>{
  return axios.post(`${BASE_URL}/logIn`, data);
  // .then(res => dispatch(getUserdetails(res.data)));
};
