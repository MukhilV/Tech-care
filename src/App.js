import "./styles.css";
import TopNavBar from "./components/js/TopNavBar";
import PatientsPane from "./components/js/PatientsPane";
import DiagnosticHistoryPane from "./components/js/DiagnosticHistoryPane";
import PatientDetailsPane from "./components/js/PatientDetailsPane";

export default function App() {
  return (
    <div className="app-container">
      <TopNavBar />
      <div className="content">
        <PatientsPane />
        <DiagnosticHistoryPane />
        <PatientDetailsPane />
      </div>
    </div>
  );
}
