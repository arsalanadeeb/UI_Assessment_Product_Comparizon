import { put, call, takeLatest } from "redux-saga/effects";
import { 
  fetchProductService
} from "./services";

import {
  fetchProductDetailSuccess,
  fetchProductDetailFailure
} from "./actions";

import * as types from "./constants";

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* fetchProductSaga(payload) {
  try {
    const response = yield call(fetchProductService,payload);
    yield put(fetchProductDetailSuccess(response));
    // yield delay(3000);
  } catch (error) {
    yield put(fetchProductDetailFailure(error));
  }
}

export function* watchProductSaga() {
  yield takeLatest(types.FETCH_PRODUCT_DETAIL_REQUEST, fetchProductSaga)};