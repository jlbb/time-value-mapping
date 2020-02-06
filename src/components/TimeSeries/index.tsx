import React, { useEffect, useState } from "react";
import LineCharts from "../LineCharts";
import IntervalMap from "../IntervalMap";

import "./TimeSeries.scss";

interface TimeSeriesProps {}

const generateDataPoints = (n: number) => {
  const ret = [];
  let y = 0;
  for (let i = 0; i < n; i += 1) {
    y += Math.max(Math.round(Math.random() * 10 - 5), 0);
    ret.push({ x: i, y, markerType: "none" });
  }
  return ret;
};

const TimeSeries = ({}: TimeSeriesProps) => {
  const data = generateDataPoints(40);

  return (
    <div className={"TimeSeries"}>
      <IntervalMap />
      <LineCharts
        dataPoints={data}
        subMinInterval={5}
        subMaxInterval={10}
        title={"LineChart time-series mapping"}
      />
    </div>
  );
};

export default TimeSeries;
