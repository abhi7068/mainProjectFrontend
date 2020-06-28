import axios from 'axios';
import { BASE_URL, getHeaders } from '../constants/BASE_URL';

class Service {
  static getApi(url) {
    return axios.get(BASE_URL + url);
  }
}
export default Service;
export const addProduct = (data) => {
  const headers = getHeaders();
  return axios.post(`${BASE_URL}/products/gifts/addproducts`, data, {
    headers,
  });
};
export const getProducts = () => {
  console.log('hittt');
  return axios.get(`${BASE_URL}/products/find/getAllProducts`);
};
export const getProductsById = (id) => {
  // console.log('single product', id);
  return axios.get(`${BASE_URL}/products/find/getProductById/${id}`);
};
export const updateProductsById = (id, data) => {
  const headers = getHeaders();
  return axios.put(`${BASE_URL}/products/change/product/${id}`, data, {
    headers,
  });
};
export const getProductByCategory = (id) => {
  // dispatch(getFilterCategoryisLoading());
  return axios.get(`${BASE_URL}/products/find/getProductByCategory/` + id);
  // .then((response) => dispatch(getFilterCategoryisSucceded(response.data)));
};
export const deleteProductById = (id) => {
  const headers = getHeaders();
  return axios.delete(`${BASE_URL}/products/delete/byId/` + id, {
    headers,
  });
};
export const getproducts = (key) => {
  return axios.get(`${BASE_URL}/products/find/search/` + key);
};
