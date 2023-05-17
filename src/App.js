import "./App.css";

import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Table from "./Components/Table";
import TableRow from "./Components/Table/TableRow";
import Form from "./Components/Form";
import { useState } from "react";

function App() {
  const [patients, setPatients] = useState([]);

  const toNewPatientAdd = (patient) => {
    console.log("### added new guy ", patient);
    setPatients([...patients, patient]);
  };

  return (
    <div className="App">
      <Banner />
      <Header>Patient Control</Header>
      <Table patientsList={patients} />
      <Header>Add new patient</Header>
      <Form
        /*setPatientsList={setPatients}*/
        // patients={(patient) => patient.name}
        toNewPatientAdd={toNewPatientAdd}
      />
    </div>
  );
}

export default App;
