import React from "react";
import PatientBasicInfoTile from "./PatientBasicInfoTile";

function PatientsPane({ data }) {
  const basicInfo = data.map((obj) => {
    return [obj.profile_picture, obj.name, obj.gender, obj.age];
  });
  console.log(basicInfo);
  return (
    <div className="patients-pane">
      <div className="patients-pane-heading"> Patients </div>
      {basicInfo.map((patient, index) => {
        return (
          <PatientBasicInfoTile
            profile_picture={patient[0]}
            name={patient[1]}
            gender={patient[2]}
            age={patient[3]}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default PatientsPane;
