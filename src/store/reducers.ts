import { combineReducers } from "redux";
import seriesReducer from "./series/reducer";

const rootReducer = combineReducers({
  series: seriesReducer
});

export default rootReducer;
