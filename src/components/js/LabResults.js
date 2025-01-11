import React from "react";
import LabResultsTile from "./LabResultsTile";

function LabResults({ patientDetails }) {
  const labResults = patientDetails.lab_results;
  return (
    <div className="lab-results">
      <div className="lab-results-heading">Lab Results</div>
      {labResults.map((res, index) => {
        return <LabResultsTile resultType={res} key={index} />;
      })}
    </div>
  );
}

export default LabResults;
