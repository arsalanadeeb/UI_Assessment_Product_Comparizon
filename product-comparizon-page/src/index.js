import React from 'react';
import ReactDOM from 'react-dom';
import ProductComparizon from "./ProductComparizon/ProductComparizon"
import { Provider } from 'react-redux'
import configureStore from './store'

const store=configureStore()

ReactDOM.render(
  <React.StrictMode>
              <Provider store={store}>
                 <ProductComparizon />
              </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
