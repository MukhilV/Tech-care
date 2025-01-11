import React from "react";

function PatientInfoTile({ imgSrc, heading, content }) {
  return (
    <div className="tile-outer-container">
      <div className="tile-inner-container-left">
        <img src={`${imgSrc}`} />
      </div>
      <div className="tile-inner-container-right">
        <div className="tile-inner-container-right-heading">{heading}</div>
        <div className="tile-inner-container-right-content">{content}</div>
      </div>
    </div>
  );
}

export default PatientInfoTile;
