import { GET_USER_DETAILS } from '../actions/userDetailAction';
import {
  intialStoreEntityState,
  handleStoreEntityUpdate,
} from '../store-action';

const userDetailReducer = (state = { ...intialStoreEntityState }, action) => {
  switch (action.type) {
    case GET_USER_DETAILS:
      return handleStoreEntityUpdate(state, action);
    default:
      return state;
  }
};
export default userDetailReducer;
