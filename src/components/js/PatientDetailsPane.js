import React from "react";
import PatientInfoTile from "./PatientInfoTile";
import LabResults from "./LabResults";

function PatientDetailsPane({ data }) {
  const patientDetails = data.filter((obj) => obj.name == "Jessica Taylor");

  return (
    <div className="patient-details-pane">
      <div className="patient-photo">
        <img className="photo" src={patientDetails[0].profile_picture}></img>
      </div>
      <div className="patient-name">{patientDetails[0].name}</div>
      <PatientInfoTile
        imgSrc={"images/dob.png"}
        heading={"DOB"}
        content={patientDetails[0].date_of_birth}
      />
      <PatientInfoTile
        imgSrc={"images/female.png"}
        heading={"Gender"}
        content={patientDetails[0].gender}
      />

      <PatientInfoTile
        imgSrc={"images/phone.png"}
        heading={"Contact Info"}
        content={patientDetails[0].phone_number}
      />

      <PatientInfoTile
        imgSrc={"images/phone.png"}
        heading={"Emergency Contact"}
        content={patientDetails[0].phone_number}
      />

      <PatientInfoTile
        imgSrc={"images/insurance.png"}
        heading={"Insurance Provider"}
        content={patientDetails[0].insurance_type}
      />
      <div className="show-all-info-button">Show all Information</div>

      <LabResults patientDetails={patientDetails[0]} />
    </div>
  );
}

export default PatientDetailsPane;
