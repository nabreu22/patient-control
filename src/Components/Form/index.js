import { useState } from "react";
import "./Form.css";
import Button from "../Button";

const Form = () => {
  const [name, setName] = useState("");

  function handleName(event) {
    setName(event.target.value);
  }

  function addNewPatient(event) {
    event.preventDefault();
    console.log("enviei formulario", name);
  }

  console.log(name);

  return (
    <section className="container">
      <form onSubmit={addNewPatient} id="form-add">
        <div className="group">
          <label htmlFor="name">name:</label>
          <input
            onChange={handleName}
            id="name"
            name="name"
            type="text"
            placeholder="type your patient's name"
            className="campo"
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
