import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import alertReducer from "./reducers/alertReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  cartReducer,
  alertReducer,
  userReducer,
});

export default rootReducer;
