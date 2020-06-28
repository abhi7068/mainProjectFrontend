import {
  intialStoreEntityState,
  handleStoreEntityUpdate,
} from '../store-action';

const loginReducer = (state = { ...intialStoreEntityState }, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return handleStoreEntityUpdate(state, action);
    default:
      return state;
  }
};
export default loginReducer;
