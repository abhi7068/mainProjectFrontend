import { LOADING, SUCCEEDED } from '../store-action';
export const GET_USER_DETAILS = 'GET_USER_DETAILS';

export const getUserdetailisLoading = () => ({
  type: GET_USER_DETAILS,
  status: LOADING,
});
export const getUserisSucceded = (counts) => ({
  type: GET_USER_DETAILS,
  status: SUCCEEDED,
  data: counts,
});
