import React from "react";

function LabResultsTile({ resultType }) {
  return (
    <div className="lab-results-tile">
      <div className="lab-result-tile-left">{resultType}</div>
      <div className="lab-result-tile-right">Dowload</div>
    </div>
  );
}

export default LabResultsTile;
