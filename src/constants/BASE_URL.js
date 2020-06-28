export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const getUserId = () =>
  localStorage.getItem('storeResponseDetails')
    ? JSON.parse(localStorage.getItem('storeResponseDetails')).id
    : '';
export const getHeaders = () => ({
  Authorization: localStorage.getItem('storeResponseDetails')
    ? JSON.parse(localStorage.getItem('storeResponseDetails')).accessToken
    : false,
  isAdmin: localStorage.getItem('storeResponseDetails')
    ? JSON.parse(localStorage.getItem('storeResponseDetails')).isAdmin
    : 'anything',
  'Content-Type': 'application/json',
});
