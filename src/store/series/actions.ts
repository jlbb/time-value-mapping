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
  // TODO: Perform GET request, to get [start, end, M] (which could update the store, returning it in the payload of the returned action)

  return {
    type: GET_SERIES
  };
};

export const setMappingAction = (m: Mapping = []): PutMappingAction => {
  // TODO: Perform PUT request, sending the mapping M, and receiving a boolean for success or failure

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
