const initialState = {
  isDialog: false,
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DIALOG_OPEN':
      return {
        ...state,
        isDialog: true,
      };
    case 'DIALOG_CLOSE':
      return {
        ...state,
        isDialog: false,
      };
    default:
      return state;
  }
};

export default dialogReducer;
