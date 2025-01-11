import React from "react";

function NavigationItems({ icon, sectionName, isActive }) {
  return (
    <div className="nav-items is-active">
      <div className="nav-left-container">
        <img className="nav-items-icon" src={`${icon}`} />
      </div>
      <div className="nav-right-container">{sectionName}</div>
    </div>
  );
}

export default NavigationItems;
