import React, { useEffect, useState } from "react";
import CanvasJSReact from "../../lib/canvasjs.react";
// import CanvasJS from "../../lib/canvasjs.min";

import "./LineCharts.scss";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface LineChartsProps {
  minimum?: number;
  maximum?: number;
  subMinInterval?: number;
  subMaxInterval?: number;
  title?: string;
  dataPoints: {}[];
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
      // dataPoints: [
      //   { label: "Apple", y: 10 },
      //   { label: "Orange", y: 15 },
      //   { label: "Banana", y: 25 },
      //   { label: "Mango", y: 30 },
      //   { label: "Grape", y: 28 }
      // ]
    }
  ]
};

const LineCharts = ({
  dataPoints: points,
  subMinInterval,
  subMaxInterval,
  title
}: LineChartsProps) => {
  const chartContainerId: string =
    "CanvasChart-" + Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
  // const chart: any = null;
  let chartRef: any = null;
  const [options, setOptions] = useState(defaultOptions);
  const [dataPoints, setDataPoints] = useState(points);

  // useEffect(() => {
  //   chart = new (CanvasJS as any).Chart(chartContainerId, options);
  //   chart.render();
  // }, []);

  useEffect(() => {
    console.log("DataPoints", dataPoints, options.data);
    chartRef.options.data[0].dataPoints = dataPoints;
    chartRef.render();
  }, []);

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
    if (subMinInterval !== undefined && subMaxInterval !== undefined) {
      options.axisX = {
        viewportMinimum: subMinInterval,
        viewportMaximum: subMaxInterval
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

  // return <div id={chartContainerId} className={"LineCharts"}></div>;
  return (
    <CanvasJSChart options={options} onRef={(ref: any) => (chartRef = ref)} />
  );
};

export default LineCharts;
