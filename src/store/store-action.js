const LOGIN_PASSED = 'LOGIN_PASSED';
const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOADING = 'LOADING';
export const SUCCEEDED = 'SUCCEEDED';
export const intialStoreEntityState = {
  errors: {},
  status: 'IDLE',
  data: [],
};

export const handleStoreEntityUpdate = (state, action) => {
  switch (action.status) {
    case LOADING:
      return {
        ...intialStoreEntityState,
        status: LOADING,
      };
    case SUCCEEDED:
      return {
        ...intialStoreEntityState,
        status: SUCCEEDED,
        data: action.data,
      };
    case LOGIN_PASSED:
      return {
        ...intialStoreEntityState,
        status: LOGIN_PASSED,
        data: action.data,
      };
    case LOGIN_FAILED:
      return {
        ...intialStoreEntityState,
        status: LOGIN_FAILED,
      };

    default:
      return state;
  }
};
