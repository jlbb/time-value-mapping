import React, { useState, useEffect } from "react";
import { Point } from "../../store/types";
import Input from "../Input";

import "./IntervalMap.scss";

interface IntervalMapProps {
  interval: Point[];
  min?: number;
  max?: number;
  minSubInterval?: number;
  maxSubInterval?: number;
  onIntervalUpdate: any;
  onMinUpdate?: any;
  onMaxUpdate?: any;
  onMinSubUpdate?: any;
  onMaxSubUpdate?: any;
}

const IntervalMap = ({
  interval,
  min,
  max,
  minSubInterval,
  maxSubInterval,
  onMinUpdate,
  onMaxUpdate,
  onMinSubUpdate,
  onMaxSubUpdate,
  onIntervalUpdate
}: IntervalMapProps) => {
  const [data, setData] = useState(interval);

  useEffect(() => {
    setData(interval);
  }, [interval]);

  const renderLimits = (label: string, value: any, callback: any) => {
    return (
      <span>
        <label className={"IntervalMap-key"}>
          <span>{label}</span>
        </label>
        <Input
          type="text"
          value={value}
          onChangeValue={(v: any) => callback(v)}
        />
      </span>
    );
  };

  const updateIntervalPoint = (y: any, idxPoint: number) => {
    data[idxPoint].y = y ? parseInt(y) : 0;
    onIntervalUpdate(data);
  };

  return (
    <div className={"IntervalMap"}>
      <div className={"IntervalMap-intervals"}>
        <div className={"IntervalMap-header"}>
          <h3>Time => Value </h3>
          (Edit value to interpolate the missing time-value in the interval)
        </div>
        <ul>
          {interval &&
            interval.map((point, idx) => {
              return (
                <li>
                  {renderLimits(`${point.x} => `, point.y, (y: any) =>
                    updateIntervalPoint(y, idx)
                  )}
                  {/* <label className={"IntervalMap-key"}>
                    <span>{point.x}</span> =>
                  </label>
                  <Input
                    type="text"
                    value={point.y}
                    onChangeValue={(y: any) => updateIntervalPoint(y, idx)}
                  /> */}
                </li>
              );
            })}
        </ul>
      </div>
      <div className={"IntervalMap-inputs"}>
        {renderLimits("Minimum Interval:", min, onMinUpdate)}
        {renderLimits("Maximum Interval:", max, onMaxUpdate)}
        <div className={"IntervalMap-header"}>
          <h3>Sub-intervals</h3>(change values to zoom in a sub-interval)
        </div>
        {renderLimits("Minimum SubInterval:", minSubInterval, onMinSubUpdate)}
        {renderLimits("Maximum SubInterval:", maxSubInterval, onMaxSubUpdate)}
      </div>
    </div>
  );
};

export default IntervalMap;
