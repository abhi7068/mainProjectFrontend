import axios from 'axios';
import { BASE_URL, getHeaders } from '../constants/BASE_URL';

export const givingRating = (rating, productId, user) => {
  const data = {
    rating: rating,
    productId: productId,
    user: user,
  };
  const headers = getHeaders();
  return axios.post(`${BASE_URL}/review`, data, {
    headers,
  });
};
export const postingComment = (comment, productId, user) => {
  const data = {
    comment: comment,
    productId: productId,
    user: user,
  };
  const headers = getHeaders();
  return axios.post(`${BASE_URL}/comment`, data, {
    headers,
  });
};
