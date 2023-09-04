import { useState } from "react";
import "./Form.css";
import Button from "../Button";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [fatCorporal, setFatCorporal] = useState("");

  const [nameError, setNameError] = useState(false);
  const [weightError, setWeightError] = useState(false);
  const [heightError, setHeightError] = useState(false);
  const [fatCorporalError, setFatCorporalError] = useState(false);

  function addNewPatient(event) {
    event.preventDefault();

    const weightNumber = parseInt(weight);
    const heightNumber = parseInt(height);
    const fatCorporalNumber = parseInt(fatCorporal);

    const nameHasErrorMessage = validateName(name);
    setNameError(nameHasErrorMessage);
    if (nameHasErrorMessage) return;

    const weightHasErrorMessage = validateWeight(weightNumber);
    setWeightError(weightHasErrorMessage);
    if (weightHasErrorMessage) return;

    const heightHasErrorMessage = validateHeight(heightNumber);
    setHeightError(heightHasErrorMessage);
    if (heightHasErrorMessage) return;

    const fatCorporalHasErrorMessage = validateFatCorporal(fatCorporalNumber);
    setFatCorporalError(fatCorporalHasErrorMessage);
    if (fatCorporalHasErrorMessage) return;

    props.toNewPatientAdded({
      id: uuidv4(),
      name,
      weight: weightNumber,
      height: heightNumber,
      fatCorporal: fatCorporalNumber,
    });

    setName("");
    setWeight("");
    setHeight("");
    setFatCorporal("");
  }

  function validateName(name) {
    if (name === "") {
      //setNameError("You must fill name"); //Um texto numa string eh true, uma sting vazia false
      return "You must fill name";
    }
    if (!name.includes(" ")) {
      return "The name must have at lest two words";
    }
    const words = name.split(" "); //o espaco eh o elemento escolhido para separar os elementos do array

    if (words[0].length < 2 || words[1].length < 2) {
      return "Each name must have at least two characters";
    }
    return false;
  }

  function validateWeight(weight) {
    if (weight === "") {
      return "You must fill weight";
    }

    if (isNaN(weight)) {
      return "Weight, must be a number";
    }

    if (weight < 5 || weight > 500) {
      return "Weight must be greater than 5kg and less than 500kg";
    }
    return false;
  }

  function validateHeight(height) {
    if (height === "") {
      return "You must fill height";
    }

    if (isNaN(height)) {
      return "Height, must be a number";
    }

    if (height < 30 || height > 250) {
      return "Height must be greater than 30cm and less than 250cm";
    }
    return false;
  }

  function validateFatCorporal(fatCorporal) {
    if (fatCorporal === "") {
      return "You must fill fat corporal";
    }

    if (isNaN(fatCorporal)) {
      return "Fat corporal, must be a number";
    }

    if (fatCorporal < 0 || fatCorporal > 100) {
      return "Fat corporal must be greater than 0% and less than 100%";
    }
    return false;
  }

  return (
    <section className="container">
      <form onSubmit={addNewPatient} id="form-add">
        <div className="group">
          <div className="item">
            <label htmlFor="name">name:</label>
            <input
              onChange={(event) => setName(event.target.value)}
              value={name}
              // type={}
              placeholder={"Type the patient's name"}
              className={nameError ? "error" : ""}
            />
            <span className="error-text">{nameError}</span>
          </div>

          <div className="item">
            <label htmlFor="weight">weight:</label>
            <input
              onChange={(event) => setWeight(event.target.value)}
              value={weight}
              // type={}
              placeholder={"Type the patient's weight"}
              className={weightError ? "error" : ""} //eh verdadeiro? sim, nao
              // className={}
            />
            <span className="error-text">{weightError}</span>
          </div>

          <div className="item">
            <label htmlFor="height">height:</label>
            <input
              onChange={(event) => setHeight(event.target.value)}
              value={height}
              // type={}
              placeholder={"Type the patient's height"}
              className={heightError ? "error" : ""}
              // className={}
            />
            <span className="error-text">{heightError}</span>
          </div>

          <div className="item">
            <label htmlFor="fatCorporal">fatCorporal:</label>
            <input
              onChange={(event) => setFatCorporal(event.target.value)}
              value={fatCorporal}
              // type={}
              placeholder={"Type the patient's fat corporal"}
              className={fatCorporalError ? "error" : ""}
              // className={}
            />
            <span className="error-text">{fatCorporalError}</span>
          </div>
        </div>
        <Button id="add-patient" className="button bto-principal">
          Add
        </Button>
      </form>
    </section>
  );
};

export default Form;
