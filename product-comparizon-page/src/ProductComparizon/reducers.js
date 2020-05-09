import * as types from "./constants";

  const initialState = {
      products: {
        
      }
  };
  
  export function productComparizonReducer(state = initialState, action) {
    switch (action.type) {
      case types.FETCH_PRODUCT_DETAIL_REQUEST:
        return {
            products: {
                fetchingProducts: true,
                productFetched: false,
                fetchingProductFailed: false,
                product:{}
            }
        }
      case types.FETCH_PRODUCT_DETAIL_SUCCESS:
        console.log('back to reducer',action)
        return {
            products: {
                fetchingProducts: false,
                productFetched: true,
                fetchingProductFailed: false,
                product:action.response
            }
        };
      case types.FETCH_PRODUCT_DETAIL_FAILURE:
        return {
            priorLoss: {
                fetchingProducts: false,
                productFetched: false,
                fetchingProductFailed: true,
                product:{}
            }
        };
      default:
        return state;
    }
  }
  