import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/Products/thunks";


const Products = () => {

  const dispatch = useDispatch();
  const { products, isLoadingProducts } = useSelector(
  (state) => state.products
);
useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (isLoadingProducts) return <div>cargando</div>
  return (
    <div>
      {products?.map((product) => <h2>{product.name}</h2>
      )}
    </div>
  );
};

export default Products;
