import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';

export const getProducts = () => {
  return (dispatch) => {
    return axios.get(`${BASE_URL}/products/find/getAllProducts`).then((res) => {
      dispatch(updateProducts(res.data));
    });
  };
};

export const updateProducts = (products) => {
  return {
    type: 'GET_PRODUCTS',
    products: products,
  };
};
export const resetProducts = () => {
  return {
    type: 'RESET_PRODUCT',
  };
};

export const setActiveCategory = (id) => {
  return {
    type: 'SET_ACTIVE',
    id,
  };
};

export const getResetFilter = () => {
  return {
    type: 'FINISH',
  };
};
export const sortByPrice = () => {
  return {
    type: 'SORT_BY_PRICE',
  };
};
export const getFilteredPrice = (range) => {
  return {
    type: 'FILTER_PRICE',
    range: range,
  };
};
export const getFilteredDiscount = (range) => {
  return {
    type: 'FILTER_DISCOUNT',
    range: range,
  };
};
export const getFilteredRating = (range) => {
  return {
    type: 'FILTER_RATING',
    range: range,
  };
};
export const sortedProductsAction = (products) => {
  return {
    type: 'GET_PRODUCTS',
    products: products,
  };
};
