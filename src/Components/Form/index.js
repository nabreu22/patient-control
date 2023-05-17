import { useState } from "react";
import "./Form.css";
import Button from "../Button";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [fatCorporal, setFatCorporal] = useState("");

  // function handleName(event) {
  //   // setId();
  //   setName(event.target.value);
  //   setWeight(event.target.value);
  //   setHeight(event.target.value);
  //   setFatCorporal(event.target.value);
  //   setBmi(event.target.value);
  // }

  function addNewPatient(event) {
    event.preventDefault();
    console.log("enviei formulario", name);

    props.toNewPatientAdd({
      id: uuidv4(),
      name: name,
      weight,
      height,
      fatCorporal,
    });

    setName("");
    setWeight("");
    setHeight("");
    setFatCorporal("");
  }

  return (
    <section className="container">
      <form onSubmit={addNewPatient} id="form-add">
        <div className="group">
          <label htmlFor="name">name:</label>
          <input
            onChange={(event) => setName(event.target.value)}
            value={name}
            // type={}
            placeholder={"Type the patient's name"}
            // className={}
          />

          <label htmlFor="weight">weight:</label>
          <input
            onChange={(event) => setWeight(event.target.value)}
            value={weight}
            // type={}
            placeholder={"Type the patient's weight"}
            // className={}
          />

          <label htmlFor="height">height:</label>
          <input
            onChange={(event) => setHeight(event.target.value)}
            value={height}
            // type={}
            placeholder={"Type the patient's height"}
            // className={}
          />

          <label htmlFor="fatCorporal">fatCorporal:</label>
          <input
            onChange={(event) => setFatCorporal(event.target.value)}
            value={fatCorporal}
            // type={}
            placeholder={"Type the patient's fat corporal"}
            // className={}
          />
        </div>
        <Button id="add-patient" className="button bto-principal">
          Add
        </Button>
      </form>
    </section>
  );
};

export default Form;
