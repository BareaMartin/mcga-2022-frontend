import {
  setProductsLoading,
  setProducts,
  dismissProductsLoading,
} from "./actions";

export const getProducts = () => async (dispatch) => {
  dispatch(setProductsLoading());
  let response = await fetch("http://localhost:3000/products");
  const data = await response?.json();
  if (data) {
    dispatch(setProducts(data));
    dispatch(dismissProductsLoading());
    console.log("data dentro del thunk", data);
  }
  console.log(response);
  if (response.status === 400) {
    dispatch(setProducts([]));
    dispatch(dismissProductsLoading());
  }
};
