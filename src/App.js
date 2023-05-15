import "./App.css";

import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Table from "./Components/Table";
import TableRow from "./Components/Table/TableRow";
import Form from "./Components/Form";
import { useState } from "react";

function App() {
  const [patients, setPatients] = useState([
    {
      id: 25,
      name: "Henrique",
      weight: 70,
      height: 1.84,
      fatCorporal: 5,
      bmi: 22.5,
    },
    {
      id: 1,
      name: "Henrica",
      weight: 70,
      height: 1.84,
      fatCorporal: 5,
      bmi: 22.5,
    },
  ]);
  console.log(patients);
  return (
    <div className="App">
      <Banner />
      <Header>Patient Control</Header>
      <Table patientsList={patients} />
      <Header>Add new patient</Header>

      <Form />
    </div>
  );
}

export default App;
