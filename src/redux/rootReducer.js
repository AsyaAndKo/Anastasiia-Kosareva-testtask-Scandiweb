import { combineReducers } from "redux";

import currencyReducer from "./Currency/currency.reducer";
import categoryReducer from "./Category/category.reducer";
import productIDReducer from "./ProductID/productID.reducer";

export default combineReducers({
  currentCurrency: currencyReducer,
  currentCategory: categoryReducer,
  currentProductID: productIDReducer,
});
