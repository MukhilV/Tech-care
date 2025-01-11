import React from "react";
import VitalsTile from "./VitalsTile";
import GraphHolder from "./GraphHolder";

function DiagnosticHistoryPane({ data }) {
  // const patientDetails = data.filter((obj) => obj.name == "Jessica Taylor");
  // let diagonsisHistory = patientDetails.diagnosis_history;
  // diagonsisHistory = diagonsisHistory.map((month) => {
  //   return [month.blood_pressure.diastolic, month.blood_pressure.systolic];
  // });

  console.log(diagonsisHistory);

  return (
    <div className="diagnostic-history-pane">
      <GraphHolder patientDetails={patientDetails[0]} />
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
}

export default DiagnosticHistoryPane;
