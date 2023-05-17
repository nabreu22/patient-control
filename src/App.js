import "./App.css";

import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Table from "./Components/Table";

import Form from "./Components/Form";
import { useState } from "react";

function App() {
  const [patients, setPatients] = useState([]);

  const toNewPatientAdded = (patient) => {
    console.log("### added new guy ", patient);
    setPatients([...patients, patient]);
  };

  return (
    <div className="App">
      <Banner />
      <Header>Patient Control</Header>
      <Table patientsList={patients} />
      <Header>Add new patient</Header>
      <Form toNewPatientAdded={toNewPatientAdded} />
    </div>
  );
}

export default App;
