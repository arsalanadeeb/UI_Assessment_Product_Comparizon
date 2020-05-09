import { all } from "redux-saga/effects";
import {
  watchProductSaga,
} from "./ProductComparizon/saga";
export default function* RootSaga() {
  yield all([
    watchProductSaga(),
  ]);
}