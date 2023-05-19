import "./App.css";

import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Table from "./Components/Table";

import Form from "./Components/Form";
import { useState } from "react";

function App() {
  const [patients, setPatients] = useState([]);

  const toNewPatientAdded = (patient) => {
    setPatients([...patients, patient]);
  };

  const removePatients = (id) => {
    console.log("removePatients", id);
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <div className="App">
      <Banner />
      <Header>Patient Control</Header>
      <Table patientsList={patients} removePatients={removePatients} />
      <Header>Add new patient</Header>
      <Form toNewPatientAdded={toNewPatientAdded} />
    </div>
  );
}

export default App;
