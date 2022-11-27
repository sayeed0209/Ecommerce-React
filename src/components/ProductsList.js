import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import Error from './Error';
import { useProductContext } from '../context/products_context';
import Product from './Product';
const ProductsList = () => {
  const {
    isLoading_products: loading,
    products_error: error,
    filtered_products: products,
  } = useProductContext();
  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-3">
      {products.map((product) => {
        return <Product {...product} key={product.id} />;
      })}
    </div>
  );
};

export default ProductsList;
