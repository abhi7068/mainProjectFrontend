import axios from 'axios';
import { BASE_URL, getHeaders } from '../constants/BASE_URL';
import {
  getUserdetailisLoading,
  getUserisSucceded,
} from '../store/actions/userDetailAction';

export const getUsers = () => {
  return axios.get(`${BASE_URL}/profileDetails/getAllUserDetails`);
};

export const getUserById = (id) => (dispatch) => {
  const headers = getHeaders();
  //
  dispatch(getUserdetailisLoading());
  return axios
    .get(`${BASE_URL}/profileDetails/getById/` + id, { headers })
    .then((res) => dispatch(getUserisSucceded(res.data)));
};
export const UpdateById = (id, data) => {
  const headers = getHeaders();

  return axios.put(`${BASE_URL}/profileDetails/updateById/${id}`, data, {
    headers,
  });
};
export const UpdateByName = (id, data) => {
  const headers = getHeaders();

  return axios.put(
    `${BASE_URL}/profileDetails/updateName/${id}`,
    { name: data },
    {
      headers,
    }
  );
};
export const updateProfilePic = (id, data) => {
  const headers = getHeaders();
  return axios.put(
    `${BASE_URL}/profileDetails/updateProfilePicture/${id}`,
    data,
    { headers }
  );
};

export const updateyoyobalance = (id, data) => {
  const headers = getHeaders();
  return axios.put(`${BASE_URL}/profileDetails/updateyoyobalance/${id}`, data, {
    headers,
  });
};
