import { productReducer } from "../../reducers/productReducer";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "../../utils/action.js";
const initialState = {
  isLoading_products: false,
  products_error: false,
  products_data: [],
};
let state = { ...initialState };
const dispatch = (action) => {
  state = productReducer(state, action);
};
const axios = (data) =>
  new Promise((resolve) => {
    resolve(data);
  });

const fetchProducts = async (url) => {
  dispatch({ type: GET_PRODUCTS_BEGIN });

  try {
    const response = await axios(url);
    const { data } = await response;
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    // dispatch({ type: GET_PRODUCTS_ERROR });
  }
};
test("GET_PRODUCTS_BEGIN", async () => {
  // await fetchProducts();
  dispatch({ type: GET_PRODUCTS_BEGIN });
  expect(state.isLoading_products).toBe(true);
});
test("GET_PRODUCTS_SUCCESS", async () => {
  await fetchProducts({ data: [{ id: "dh", imgUrl: "img", brand: "a", model: "b", price: "10" }] });
  expect(state.isLoading_products).toBe(false);
  expect(state.products_data).toEqual([
    { id: "dh", imgUrl: "img", brand: "a", model: "b", price: "10" },
  ]);
});

test("GET_PRODUCTS_ERROR", async () => {
  dispatch({ type: GET_PRODUCTS_ERROR });
  expect(state.isLoading_products).toBe(false);
  expect(state.products_error).toBe(true);
});
