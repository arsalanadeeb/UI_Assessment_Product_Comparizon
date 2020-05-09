import { combineReducers } from "redux";
import {productComparizonReducer} from "./ProductComparizon/reducers";

const rootReducer = combineReducers({
  products:productComparizonReducer,
});
export default rootReducer;