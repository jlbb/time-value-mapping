export const GET_SERIES: string = "GET_SERIES";
export const PUT_SERIES: string = "PUT_SERIES";

export type Mapping = [any, number][];

export interface GetMappingAction {
  type: typeof GET_SERIES;
  payload?: any;
}

export interface PutMappingAction {
  type: typeof PUT_SERIES;
  payload: Mapping;
}

export type ActionSeries = GetMappingAction | PutMappingAction;

export interface StateSeries {
  start_time: number;
  end_time: number;
  M: Mapping;
}
