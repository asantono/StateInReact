import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import alertReducer from "./reducers/alertReducer";

const rootReducer = combineReducers({
  cartReducer,
  alertReducer,
});

export default rootReducer;
