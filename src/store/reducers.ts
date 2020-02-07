import { combineReducers } from "redux";
import seriesReducer from "./series/reducer";
import { StateSeries } from "./series/types";

export interface RootReducer {
  series: StateSeries;
}

const rootReducer = combineReducers<RootReducer>({
  series: seriesReducer
});

export default rootReducer;
