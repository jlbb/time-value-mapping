import React, { useEffect, useState } from "react";
import LineCharts from "../LineCharts";
import IntervalMap from "../IntervalMap";
import { useSelector, useDispatch } from "react-redux";
import { getMappingAction, setMappingAction } from "../../store/series/actions";
import { selectSeries } from "../../store/selectors";
import { interpolation } from "../../utils";
import { Mapping } from "../../store/series/types";

import "./TimeSeries.scss";

interface TimeSeriesProps {}

const TimeSeries = ({}: TimeSeriesProps) => {
  const dispatch = useDispatch();
  const series = useSelector(selectSeries);

  const [interval, setInterval] = useState<Mapping>([]);
  const [min, setMin] = useState<number>(series.start_time);
  const [max, setMax] = useState<number>(series.end_time);
  const [minSubInterval, setMinSubInterval] = useState<number>();
  const [maxSubInterval, setMaxSubInterval] = useState<number>();

  useEffect(() => {
    dispatch(getMappingAction());
  }, []);

  useEffect(() => {
    setInterval(series.M);
  }, [series]);

  const updateInterval = (m: Mapping) => {
    const newM: Mapping = interpolation(m, min, max);
    setInterval(newM);
    dispatch(setMappingAction(newM));
  };

  return (
    <div className={"TimeSeries"}>
      <IntervalMap
        interval={interval}
        min={min}
        max={max}
        minSubInterval={minSubInterval}
        maxSubInterval={maxSubInterval}
        onMinUpdate={setMin}
        onMaxUpdate={setMax}
        onMinSubUpdate={setMinSubInterval}
        onMaxSubUpdate={setMaxSubInterval}
        onIntervalUpdate={updateInterval}
      />
      <LineCharts
        points={interval}
        minimum={min}
        maximum={max}
        subMinInterval={minSubInterval}
        subMaxInterval={maxSubInterval}
        title={"Line chart time-value mapping"}
      />
    </div>
  );
};

export default TimeSeries;
