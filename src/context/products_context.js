import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { productReducer } from '../reducers/productReducer';
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  UPDATE_FILTERS,
  CART_ITEMS,
  LOAD_PRODUCTS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  API_URL,
  API_URL_CART,
} from '../utils/action.js';
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
  //   !All PRODUCTS
  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios(url);
      const { data } = await response;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  useEffect(() => {
    fetchProducts(API_URL);
  }, []);
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
