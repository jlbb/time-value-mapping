import {
  StateSeries,
  ActionSeries,
  GET_SERIES,
  SET_SERIES,
  SET_SERIES_LIMITS
} from "./types";

const defaultState: StateSeries = {
  start_time: -5,
  end_time: 20,
  M: [
    { x: 1, y: 2 },
    { x: 3, y: 5 },
    { x: 4, y: 6 }
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
    case SET_SERIES:
      return { ...state, M: action.payload };
    case SET_SERIES_LIMITS:
      return {
        ...state,
        start_time: action.payload.start_time,
        end_time: action.payload.end_time
      };
  }
};

export default reducer;
