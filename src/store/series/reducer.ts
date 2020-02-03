import { StateSeries, ActionSeries, GET_SERIES, PUT_SERIES } from "./types";

const defaultState: StateSeries = {
  start_time: 0,
  end_time: 6,
  M: [
    [1, 2],
    [3, 5],
    [4, 6]
  ]
};

const reducer = (
  state: StateSeries = defaultState,
  action: ActionSeries
): StateSeries => {
  switch (action.type) {
    case GET_SERIES:
    default:
      return state;
    case PUT_SERIES:
      return { ...state, M: action.payload };
  }
};

export default reducer;
