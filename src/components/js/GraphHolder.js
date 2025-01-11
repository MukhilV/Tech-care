import React from "react";

function GraphHolder({ patientDetails }) {
  return (
    <div className="diagnostic-graph">
      <div className="diagonsis-left-pane"></div>
      <div className="diagonsis-right-pane"></div>
    </div>
  );
}

export default GraphHolder;
