import axios from 'axios';
import { BASE_URL, getHeaders } from '../constants/BASE_URL';
export const sendGift = (id, mail, balance) => {
  /*   */
  return axios.post(`${BASE_URL}/order/sendHistory`, {
    userId: id,
    mailId: mail,
    balance: balance,
  });
};
export const redeemGift = (userId, couponCode) => {
  const headers = getHeaders();
  return axios.post(
    `${BASE_URL}/redeem/redeemGift`,
    {
      userId,
      couponCode,
    },
    {
      headers,
    }
  );
};
