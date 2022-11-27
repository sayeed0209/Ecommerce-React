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
export const productReducer = (state, action) => {
  switch (action.type) {
    // * all products case starts here
    case GET_PRODUCTS_BEGIN:
      return { ...state, isLoading_products: true };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products_data: action.payload,
        isLoading_products: false,
      };
    case GET_PRODUCTS_ERROR:
      return { ...state, isLoading_products: false, products_error: true };
    // * all products case end here

    // * Single product case starts here
    case GET_SINGLE_PRODUCT_BEGIN:
      return { ...state, single_products_loading: true };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        single_products_loading: false,
        single_products_data: action.payload,
      };
    case GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        single_products_loading: false,
        single_products_error: true,
      };
    // * Single product case ends here
    default:
      return state;
    // throw new Error(`No Matching "${action.type}" - action type`);
  }
};
