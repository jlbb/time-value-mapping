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
  axisX: {
    labelFontColor: "white"
  },
  axisY: {
    labelFontColor: "white"
  },
  backgroundColor: "#041323",
  title: {
    text: "Mapping values graph",
    fontColor: "ghostwhite"
  },
  toolTip: {
    backgroundColor: "ghostwhite",
    borderColor: "white",
    cornerRadius: 10,
    fontWeight: "bold"
  },
  zoomEnabled: true,
  zoomType: "x",
  data: [
    {
      color: "#458c49",
      markerColor: "darkorange",
      type: "line",
      dataPoints: []
    }
  ]
};

let chartRef: any = null;

const LineCharts = ({
  points,
  minimum,
  maximum,
  subMinInterval,
  subMaxInterval,
  title
}: LineChartsProps) => {
  const [options, setOptions] = useState(defaultOptions);

  useEffect(() => {
    console.log("Effect!?");
    chartRef.render();
  });

  useEffect(() => {
    console.log("LineChart points", points, points, options.data);
    chartRef.options.data[0].dataPoints = points;
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
        ...options.axisX,
        viewportMinimum: parseInt(subMinInterval as any),
        viewportMaximum: parseInt(subMaxInterval as any)
      };
      setOptions(options);
      chartRef.render();

      options.axisX = {
        ...options.axisX,
        viewportMinimum: null,
        viewportMaximum: null
      };
      setOptions(options);
    }
  }, [subMinInterval, subMaxInterval]);

  useEffect(() => {
    console.log("Intervals", minimum, maximum);

    if (minimum !== undefined && maximum !== undefined) {
      options.axisX = {
        ...options.axisX,
        minimum: parseInt(minimum as any),
        maximum: parseInt(maximum as any)
      };
      setOptions(options);
      chartRef.render();
    }
  }, [minimum, maximum]);

  return (
    <div className={"LineCharts"}>
      <CanvasJSChart options={options} onRef={(ref: any) => (chartRef = ref)} />
    </div>
  );
};

export default LineCharts;
