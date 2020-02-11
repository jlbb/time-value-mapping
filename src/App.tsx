import React from "react";
import TimeSeries from "./components/TimeSeries";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <h1>Time-Value Mapping</h1>
      <TimeSeries />
    </div>
  );
};

export default App;
