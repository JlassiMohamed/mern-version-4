import { combineReducers } from "redux";
import userReducer from "./user";
import sellerReducer from "./seller";
import itemReducer from "./item";
import editReducer from "./edit";
import cartReducer from "./cart";
const rootReducer = combineReducers({
  userReducer,
  sellerReducer,
  itemReducer,
  editReducer,
  cartReducer,
});
export default rootReducer;
