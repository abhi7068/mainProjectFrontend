const initialState = {
  isAuthUIOpened: false,
};

const authUIReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_AUTH_UI':
      return {
        ...state,
        isAuthUIOpened: true,
      };
    case 'CLOSE_AUTH_UI':
      return {
        ...state,
        isAuthUIOpened: false,
      };
    default:
      return state;
  }
};

export default authUIReducer;
