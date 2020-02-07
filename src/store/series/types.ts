import { Point } from "../types";

export const GET_SERIES: string = "GET_SERIES";
export const SET_SERIES: string = "SET_SERIES";
export const SET_SERIES_LIMITS: string = "SET_SERIES_LIMITS";

export type Mapping = Point[];

export interface GetMappingAction {
  type: typeof GET_SERIES;
  payload?: any;
}

export interface PutMappingAction {
  type: typeof SET_SERIES;
  payload: Mapping;
}

export interface SetMappingLimitsAction {
  type: typeof SET_SERIES_LIMITS;
  payload: {
    start_time: number;
    end_time: number;
  };
}

export type ActionSeries = GetMappingAction | PutMappingAction;

export interface StateSeries {
  start_time: number;
  end_time: number;
  M: Mapping;
}
