import axios from 'axios';
import { getUserId, getHeaders, BASE_URL } from '../constants/BASE_URL';

export const deleteOneApi = (cartId) => {
  if (getUserId()) {
    const headers = getHeaders();
    return axios.get(`${BASE_URL}/cart/decrement/${cartId}/${getUserId()}`, {
      headers,
    });
  }
};

export const addOneApi = (cartId) => {
  if (getUserId()) {
    const headers = getHeaders();
    return axios.get(`${BASE_URL}/cart/increment/${cartId}/${getUserId()}`, {
      headers,
    });
  }
};
