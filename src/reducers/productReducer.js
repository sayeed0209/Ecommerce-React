import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  UPDATE_FILTERS,
  CART_ITEMS,
  GET_CART_ITEMS_AMOUNT,
  LOAD_PRODUCTS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../utils/action.js";
import { createCookie } from "../utils/helper";
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
      const { products_data, searchTerm, searchParam } = state;
      let tempProduct = [...products_data];
      if (searchTerm) {
        tempProduct = tempProduct.filter((product) => {
          return searchParam.some((newItem) => {
            return product[newItem].toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          });
        });
      }
      return { ...state, filtered_products: tempProduct };
    // * Loading products and  Filter products case ends here

    // * Clear filter

    case CLEAR_FILTERS:
      return { ...state, searchTerm: "" };

    case CART_ITEMS:
      const { cart_items } = state;
      const {
        id,
        storageCode,
        colorCode,
        color,
        storage,
        cartObj: { model, brand, imgUrl, price, weight, cpu, ram },
      } = action.payload;
      const tempItem = state.cart_items.find(
        (item) =>
          item.id === id && item.storageCode === storageCode && item.colorCode === colorCode,
      );
      if (tempItem) {
        const tempCart = cart_items.map((item) => {
          if (item.id === id && item.storageCode === storageCode && item.colorCode === colorCode) {
            let count = item.count + 1;
            return { ...item, count: count };
          } else {
            return item;
          }
        });
        createCookie("cart", JSON.stringify([...tempCart]), 60);
        return { ...state, cart_items: tempCart };
      } else {
        const newItem = {
          id,
          storageCode,
          colorCode,
          color,
          storage,
          model,
          brand,
          imgUrl,
          price,
          weight,
          cpu,
          ram,
          count: 1,
        };
        createCookie("cart", JSON.stringify([...state.cart_items, newItem]), 60);
        return { ...state, cart_items: [...state.cart_items, newItem] };
      }
    case GET_CART_ITEMS_AMOUNT:
      const totalItems = state.cart_items.reduce((acc, count) => {
        acc = acc + count.count;
        return acc;
      }, 0);
      return { ...state, cart_items_amount: totalItems };

    default:
      return state;
    // throw new Error(`No Matching "${action.type}" - action type`);
  }
};
