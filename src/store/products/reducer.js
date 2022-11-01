import {
  SET_LOADING,
  DISMISS_LOADING,
  SET_PRODUCTS,
} from "./types";

const INITIAL_STATE = {
  isLoadingProducts: false,
  products: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
        return {
          ...state,
          products: [...action.payload.products],
          isLoadingProducts: false,
        };
    case SET_LOADING:
      return {
        ...state,
        isLoadingProducts: true,
      };
    case DISMISS_LOADING:
      return state;
      // return {
      //   ...state,
      //   isLoadingProducts: false,
      // };
    default:
      return state;
  }
};

export default reducer;
