import * as types from "./constants";

export const fetchProductDetailRequest = payload => {
  console.log("calling action",payload)
  return {
    type: types.FETCH_PRODUCT_DETAIL_REQUEST,
    payload
  };
};

export const fetchProductDetailSuccess = response => {
  return {
    type: types.FETCH_PRODUCT_DETAIL_SUCCESS,
    response
  };
};

export const fetchProductDetailFailure = error => {
  return {
    type: types.FETCH_PRODUCT_DETAIL_FAILURE,
    error
  };
};