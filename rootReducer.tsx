import { combineReducers } from "redux";
import dataReducer from "./src/components/Redux/reducer";

export default combineReducers({
  data: dataReducer,
});
