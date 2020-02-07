import React, { useEffect, useState } from "react";
import CanvasJSReact from "../../lib/canvasjs.react";
import { Point } from "../../store/types";

import "./LineCharts.scss";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface LineChartsProps {
  minimum?: number;
  maximum?: number;
  subMinInterval?: number;
  subMaxInterval?: number;
  title?: string;
  points: Point[];
}

const defaultOptions: any = {
  animationEnabled: true,
  title: {
    text: "Mapping values graph"
  },
  zoomEnabled: true,
  zoomType: "x",
  data: [
    {
      type: "line",
      dataPoints: []
    }
  ]
};

let chartRef: any = null;

const LineCharts = ({
  points,
  subMinInterval,
  subMaxInterval,
  title
}: LineChartsProps) => {
  const [options, setOptions] = useState(defaultOptions);
  const [dataPoints, setDataPoints] = useState(points);

  useEffect(() => {
    console.log("LineChart points", dataPoints, options.data);
    chartRef.options.data[0].dataPoints = dataPoints;
    chartRef.render();
  }, [points]);

  useEffect(() => {
    options.title.text = title;
    setOptions({
      ...options,
      title: {
        text: title
      }
    });
  }, [title]);

  useEffect(() => {
    console.log("Sub Intervals", subMinInterval, subMaxInterval);

    if (subMinInterval !== undefined && subMaxInterval !== undefined) {
      options.axisX = {
        viewportMinimum: parseInt(subMinInterval as any),
        viewportMaximum: parseInt(subMaxInterval as any)
      };
      setOptions(options);
      chartRef.render();

      options.axisX = {
        viewportMinimum: null,
        viewportMaximum: null
      };
      setOptions(options);
    }
  }, [subMinInterval, subMaxInterval]);

  return (
    <CanvasJSChart options={options} onRef={(ref: any) => (chartRef = ref)} />
  );
};

export default LineCharts;
