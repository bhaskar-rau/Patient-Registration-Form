import "./App.css";
import Card from "./UI/Card";
import Header from "./header/Header";
import PatientForm from "./patientForm/PatientForm";
import EmergencyForm from "./patientForm/EmergencyForm";
import HealthHistoryForm from "./patientForm/HealthHistoryForm";
import InsuranceForm from "./patientForm/InsuranceForm";

function App() {
  return (
    <>
      <Card>
        <Header />
        <PatientForm />
        <EmergencyForm />
        <HealthHistoryForm />
        <InsuranceForm />
      </Card>
    </>
  );
}

export default App;
