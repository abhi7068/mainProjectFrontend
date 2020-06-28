import axios from 'axios';
import { BASE_URL, getHeaders, getUserId } from '../../constants/BASE_URL';

export const addToCart = (product) => {
  if (getUserId()) {
    const headers = getHeaders();
    return async (dispatch) => {
      const response = await axios.post(
        `${BASE_URL}/cart/addInCart`,
        {
          productId: product._id,
          productCount: product.count || 1,
          userId: getUserId(),
        },
        { headers }
      );
      if (response) {
        return dispatch({
          type: 'UPDATE_CART',
          payload: response.data,
        });
      }
    };
  } else {
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  }
};
export const getCart = () => {
  if (getUserId()) {
    const headers = getHeaders();
    return async (dispatch) => {
      const response = await axios.get(
        `${BASE_URL}/cart/getCart/${getUserId()}`,
        {
          headers,
        }
      );
      if (response) {
        return dispatch({
          type: 'UPDATE_CART',
          payload: response.data,
        });
      }
    };
  } else return { type: 'null' };
};
export const removeProduct = (id) => {
  if (getUserId()) {
    const headers = getHeaders();
    return async (dispatch) => {
      const response = await axios.post(
        `${BASE_URL}/cart/removeFromCart`,
        {
          productId: id,
          userId: getUserId(),
        },
        { headers }
      );
      if (response) {
        return dispatch({
          type: 'REMOVE_PRODUCT',
          payload: id,
        });
      }
    };
  } else {
    return {
      type: 'REMOVE_PRODUCT',
      payload: id,
    };
  }
};
export const addOne = (index) => {
  return {
    type: 'INCREASE_COUNT',
    payload: index,
  };
};
export const removeOne = (index) => {
  return {
    type: 'DECREASE_COUNT',
    payload: index,
  };
};

export const addToCartAfterLogin = (cart) => {
  if (getUserId()) {
    const headers = getHeaders();
    return async (dispatch) => {
      const response = await axios.post(
        `${BASE_URL}/cart/addManyToCart`,
        {
          cart: cart.map((data) => {
            if (data.product) {
              return {
                product: data.product._id,
                count: data.count,
              };
            }
          }),
          userId: getUserId(),
        },
        { headers }
      );
      if (response) {
        return dispatch({
          type: 'UPDATE_CART',
          payload: response.data,
        });
      }
    };
  } else {
    return null;
  }
};

export const resetCart = (index) => {
  return {
    type: 'RESET_CART',
  };
};
