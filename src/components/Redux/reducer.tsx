import { PUT_DATA } from "./action";
import content from "../CardContentData/content.json";

interface ActionType {
  type: string;
  payload: number;
}

const initialState = content;

function dataReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case PUT_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default dataReducer;
