import { combineReducers } from 'redux';
import productsReducer from './Products/reducer';



const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
