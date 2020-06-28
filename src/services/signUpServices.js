import axios from 'axios';
import { BASE_URL } from '../constants/BASE_URL';
export const signUpApi = (data) => {
  return axios.post(`${BASE_URL}/signUp`, data);
};
