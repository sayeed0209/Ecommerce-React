import { productReducer } from "../../reducers/productReducer";
import {
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../../utils/action.js";
const initialState = {
  single_products_loading: false,
  single_products_error: false,
  single_products_data: {},
};
let state = { ...initialState };
const dispatch = (action) => {
  state = productReducer(state, action);
};
const axios = (data) =>
  new Promise((resolve) => {
    resolve(data);
  });

const fetchSingleProduct = async (url) => {
  dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });

  try {
    const response = await axios(url);
    const { data } = await response;
    dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
  }
};
test("GET_PRODUCTS_BEGIN", async () => {
  dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
  expect(state.single_products_loading).toBe(true);
});
test("GET_PRODUCTS_SUCCESS", async () => {
  await fetchSingleProduct({
    data: { id: "dh", imgUrl: "img", brand: "a", model: "b", price: "10" },
  });
  expect(state.single_products_loading).toBe(false);
  expect(state.single_products_data).toEqual({
    id: "dh",
    imgUrl: "img",
    brand: "a",
    model: "b",
    price: "10",
  });
});

test("GET_PRODUCTS_ERROR", async () => {
  dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
  expect(state.isLoading_products).toBeFalsy();
  expect(state.single_products_error).toBeTruthy();
});
