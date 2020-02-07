import React, { useEffect, useState } from "react";
import LineCharts from "../LineCharts";
import IntervalMap from "../IntervalMap";
import { useSelector, useDispatch } from "react-redux";
import { getMappingAction, setMappingAction } from "../../store/series/actions";
import { selectSeries } from "../../store/selectors";

import "./TimeSeries.scss";

interface TimeSeriesProps {}

const generateDataPoints = (n: number) => {
  const ret = [];
  let y = 0;
  for (let i = 0; i < n; i += 1) {
    y += Math.max(Math.round(Math.random() * 10 - 5), 0);
    i % 3 && ret.push({ x: i, y });
  }
  return ret;
};

const TimeSeries = ({}: TimeSeriesProps) => {
  const dispatch = useDispatch();
  const series = useSelector(selectSeries);

  const data = generateDataPoints(40);
  const [interval, setInterval] = useState(data);
  const [min, setMin] = useState<number>(series.start_time);
  const [max, setMax] = useState<number>(series.end_time);
  const [minSubInterval, setMinSubInterval] = useState<number>();
  const [maxSubInterval, setMaxSubInterval] = useState<number>();

  useEffect(() => {
    dispatch(getMappingAction());
  }, []);

  const updateInterval = (d: any) => {
    setInterval(d);
    dispatch(setMappingAction(d));
  };

  return (
    <div className={"TimeSeries"}>
      <IntervalMap
        interval={series.M}
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
        points={series.M}
        minimum={min}
        maximum={max}
        subMinInterval={minSubInterval}
        subMaxInterval={maxSubInterval}
        title={"LineChart time-series mapping"}
      />
    </div>
  );
};

export default TimeSeries;
