import React from "react";
import VitalsTile from "./VitalsTile";

const DiagnosticHistoryPane = () => (
  <div className="diagnostic-history-pane">
    <div className="diagnostic-graph">Graph (Placeholder)</div>
    <div className="diagnostic-stats">
      <VitalsTile
        bgColor={"#E0F3FA"}
        imgSrc={"images/respiratory-rate.png"}
        vitalName={"Respiratory Rate"}
        numbers={"20 bpm"}
        inference={"Normal"}
      />
      <VitalsTile
        bgColor={"#FFE6F9"}
        imgSrc={"images/temperature.png"}
        vitalName={"Temperature"}
        numbers={"98.6 F"}
        inference={"Normal"}
      />
      <VitalsTile
        bgColor={"#FFE6F1"}
        imgSrc={"images/heart-rate.png"}
        vitalName={"Heart Rate"}
        numbers={"78 bpm"}
        inference={"Lower than average"}
      />
      {/* <div className="stat-box" style={{ background: "#E0F3FA" }}>
        Respiratory Rate
      </div>
      <div className="stat-box" style={{ background: "#FFE6F9" }}>
        Temperature
      </div>
      <div className="stat-box" style={{ background: "#FFE6F1" }}>
        Heart Rate
      </div> */}
    </div>
  </div>
);

export default DiagnosticHistoryPane;
