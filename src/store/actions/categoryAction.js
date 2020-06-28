import { LOADING, SUCCEEDED } from '../store-action';
export const GET_CATEGORIES = 'GET_CATEGORIES';

export const getCategoreisLoading = () => ({
  type: GET_CATEGORIES,
  status: LOADING,
});
export const getCategoreisSucceded = (counts) => ({
  type: GET_CATEGORIES,
  status: SUCCEEDED,
  data: counts,
});
