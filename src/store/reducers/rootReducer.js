import productReducer from './productReducers';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';
import loginReducer from '../reducers/loginreducer';
import categoryReducer from '../reducers/categoryReducer';
// import filtercategoryReducer from './userDetail';
import dialogReducer from '../reducers/popupReducer';
import userDetailReducer from '../reducers/userDetail';
// import filtercategoryReducer from '../reducers/filtercategoryReducer';
import authUIReducer from '../reducers/authUIReducer';
const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  userDetails: loginReducer,
  categories: categoryReducer,
  // filtercategory: filtercategoryReducer,
  dialog: dialogReducer,
  singleUserDetail: userDetailReducer,
  // filtercategory: filtercategoryReducer,
  authUI: authUIReducer,
});
export default rootReducer;
