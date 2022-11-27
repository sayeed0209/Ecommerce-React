import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { productReducer } from '../reducers/productReducer';
const initialState = {
  isLoading_products: false,
  products_error: false,
  products_data: [],
  filtered_products: [],
  single_products_loading: false,
  single_products_error: false,
  single_products_data: {},
  searchTerm: '',
  cart_items: [],
};
const ProductsContext = React.createContext();
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return (
    <ProductsContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductContext = () => {
  return useContext(ProductsContext);
};
