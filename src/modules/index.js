import { combineReducers } from "redux";
import neighbor from "./neighbor";
import user from "./user";

const rootReducer = combineReducers({
  neighbor,
  user,
});

export default rootReducer;
