import React from "react";
import "../css/TopNavBar.css";
import NavigationItems from "./NavigationItems";

function TopNavBar({ data }) {
  return (
    <div className="top-nav-bar">
      <div className="logo">Tech Care</div>
      <NavigationItems
        icon={"images/home.png"}
        sectionName={"Overview"}
        isActive={false}
      />
      <NavigationItems
        icon={"images/patients.png"}
        sectionName={"Patients"}
        isActive={true}
      />
      <NavigationItems
        icon={"images/message.png"}
        sectionName={"Schedule"}
        isActive={false}
      />
      <NavigationItems
        icon={"images/message.png"}
        sectionName={"Messages"}
        isActive={false}
      />
      <NavigationItems
        icon={"images/transactions.png"}
        sectionName={"Transactions"}
        isActive={false}
      />
      <div className="doctor-logo">Doctor-info</div>
    </div>
  );
}

export default TopNavBar;
