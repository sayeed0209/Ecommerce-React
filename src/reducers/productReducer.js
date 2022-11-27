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

    // * Loading products and  Filter products case starts here

    case LOAD_PRODUCTS:
      return { ...state, filtered_products: [...action.payload] };

    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return { ...state, [name]: value };

    case FILTER_PRODUCTS:
      const { products_data, searchTerm } = state;
      let tempProduct = [...products_data];
      if (searchTerm) {
        tempProduct = tempProduct.filter((product) => {
          return product.model.toLowerCase().includes(searchTerm);
        });
      }
      return { ...state, filtered_products: tempProduct };
    // * Loading products and  Filter products case ends here

    // * Clear filter

    case CLEAR_FILTERS:
      return { ...state, searchTerm: '' };

    case CART_ITEMS:
      return { ...state, cart_items: [...state.cart_items, action.payload] };
    default:
      return state;
    // throw new Error(`No Matching "${action.type}" - action type`);
  }
};
