const initialState = [];
export default (state = initialState, action) => {
  //

  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, { product: action.payload, count: 1 }];
    case 'UPDATE_CART':
      return [...action.payload];
    case 'REMOVE_PRODUCT':
      return [
        ...state.filter((product) => product.product._id !== action.payload),
      ];
    case 'DECREASE_COUNT': {
      state[action.payload].count -= 1;
      return [...state];
    }
    case 'INCREASE_COUNT': {
      state[action.payload].count += 1;
      return [...state];
    }
    case 'RESET_CART': {
      return [...initialState];
    }
    default:
      return state;
  }
};
