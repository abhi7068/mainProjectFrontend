import { GET_CATEGORIES } from '../actions/categoryAction';
import {
  intialStoreEntityState,
  handleStoreEntityUpdate,
} from '../store-action';

const categoryReducer = (state = { ...intialStoreEntityState }, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return handleStoreEntityUpdate(state, action);
    default:
      return state;
  }
};
export default categoryReducer;
