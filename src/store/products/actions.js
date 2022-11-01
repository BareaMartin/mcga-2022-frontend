import {
  SET_LOADING,
  DISMISS_LOADING,
  SET_PRODUCTS,
} from "./types";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: {
      products: products,
    },
  };
};

export const setProductsLoading = () => ({
  type: SET_LOADING,
  payload: { isLoadingProducts: true },
});

export const dismissProductsLoading = () => ({
  type: DISMISS_LOADING,
  payload: { isLoadingProducts: false },
});
