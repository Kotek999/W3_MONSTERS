import { PUT_DATA } from "./action";
import content from "../CardContentData/content.json";

const initialState = content;

function dataReducer(state = initialState, action: any) {
  switch (action.type) {
    case PUT_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default dataReducer;
