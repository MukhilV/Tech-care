import React, { useEffect } from "react";
import { DataProvider, useData } from "./components/js/DataContext";

import "./styles.css";
import TopNavBar from "./components/js/TopNavBar";
import PatientsPane from "./components/js/PatientsPane";
import DiagnosticHistoryPane from "./components/js/DiagnosticHistoryPane";
import PatientDetailsPane from "./components/js/PatientDetailsPane";

const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

function App() {
  const { data, setData } = useData();

  const username = "coalition";
  const password = "skills-test";

  // Encode the username and password in Base64
  const credentials = btoa(`${username}:${password}`);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("api call done");
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container">
      <TopNavBar data={data} />
      <div className="content">
        <PatientsPane data={data} />
        <DiagnosticHistoryPane data={data} />
        <PatientDetailsPane data={data} />
      </div>
    </div>
  );
}

export default () => (
  <DataProvider>
    <App />
  </DataProvider>
);
