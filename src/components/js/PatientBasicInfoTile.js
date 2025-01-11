import React from "react";

function PatientBasicInfoTile({ profile_picture, name, gender, age }) {
  //   console.log(props);
  //   const { profile_picture, name, gender, age } = props;
  return (
    <div className="basic-info-tile-outer-container">
      <div className="basic-info-tile-inner-container-left">
        <img className="basic-info-photo" src={profile_picture}></img>
      </div>
      <div className="basic-info-tile-inner-container-right">
        <div className="basic-info-tile-inner-container-right-heading">
          {name}
        </div>
        <div className="basic-info-tile-inner-container-right-content">
          {gender},{age}
        </div>
      </div>
    </div>
  );
}

export default PatientBasicInfoTile;
