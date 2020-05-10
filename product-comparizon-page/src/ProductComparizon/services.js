
import {productComparison} from "../configuration"

export const fetchProductService = (request) => {
    return fetch(productComparison)
      .then(response => {
        return response.json();
      })
      .catch((error) => {
        console.error('{{{{........}}}}Error:', error);
      });
};