import React from "react";

function VitalsTile({ bgColor, imgSrc, vitalName, numbers, inference }) {
  return (
    <div className="stat-box" style={{ background: `${bgColor}` }}>
      <div className="vitals-img-container">
        <img className="vitals-image" src={`${imgSrc}`} />
      </div>
      <div className="vitals-name">{vitalName}</div>
      <div className="vitals-numbers">{numbers}</div>
      <div className="vitals-inference">{inference}</div>
    </div>
  );
}

export default VitalsTile;
