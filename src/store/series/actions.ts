import {
  GET_SERIES,
  GetMappingAction,
  SET_SERIES,
  PutMappingAction,
  SET_SERIES_LIMITS,
  Mapping,
  SetMappingLimitsAction
} from "./types";

export const getMappingAction = (): GetMappingAction => {
  return {
    type: GET_SERIES
  };
};

export const setMappingAction = (m: Mapping = []): PutMappingAction => {
  return {
    type: SET_SERIES,
    payload: m
  };
};

export const setMappingLimits = (
  min: number,
  max: number
): SetMappingLimitsAction => {
  return {
    type: SET_SERIES_LIMITS,
    payload: {
      start_time: min,
      end_time: max
    }
  };
};
