import {
  GET_SERIES,
  GetMappingAction,
  PUT_SERIES,
  PutMappingAction,
  Mapping
} from "./types";

export const getMappingAction = (): GetMappingAction => {
  return {
    type: GET_SERIES
  };
};

export const putMappingAction = (m: Mapping = []): PutMappingAction => {
  return {
    type: PUT_SERIES,
    payload: m
  };
};
