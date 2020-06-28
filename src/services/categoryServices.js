import axios from 'axios';
import { BASE_URL, getHeaders } from '../constants/BASE_URL';
import {
  getCategoreisLoading,
  getCategoreisSucceded,
} from '../store/actions/categoryAction';

export const addCategory = title => {
  const headers = getHeaders();
  return axios.post(
    `${BASE_URL}/categories/gifts/addCategory`,
    {
      title,
    },
    { headers }
  );
};
export const getCategories = () => dispatch => {
  dispatch(getCategoreisLoading());
  return axios
    .get(`${BASE_URL}/categories/find/getAllCatagory`)
    .then(response => dispatch(getCategoreisSucceded(response.data)));
};

export const deleteCategory = id => {
  const headers = getHeaders();
  return axios.delete(`${BASE_URL}/categories/delete/category/${id}`, {
    headers,
  });
};
export const filterNavBarItems = id => {
  return axios.get(`${BASE_URL}/categories/filterNavBarItems/${id}`);
};
export const getCategoriesById = id => {
  return axios.get(`${BASE_URL}/categories/find/getCategoryById/${id}`);
};
export const updateCategoriesById = (id, data) => {
  const headers = getHeaders();
  return axios.put(`${BASE_URL}/categories/change/category/${id}`, data, {
    headers,
  });
}; // taking header for verification its containning token, and is admin
