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

    if (name === "") {
      alert("You must fill name");
      setNameError(true);
      return;
    }
    if (!name.includes(" ")) {
      alert("The name must have at lest two words");
      setNameError(true);
      return;
    }
    const words = name.split(" "); //o espaco eh o elemento escolhido para separar os elementos do array
    console.log(words);
    if (words[0].length < 2 || words[1].length < 2) {
      alert("Each name must have at least two characters");
      setNameError(true);
      console.log(nameError);
      return;
    }
    setNameError(false);
    // ----------------------------------------------------------------

    if (weight === "") {
      alert("You must fill weight");
      setWeightError(true);
      return;
    }

    if (isNaN(parseInt(weight))) {
      alert("Weight, must be a number");
      setWeightError(true);
      return;
    }

    if (weightNumber < 5 || weightNumber > 500) {
      alert("Weight must be greater than 5kg and less than 500kg");
      setWeightError(true);
      return;
    }
    setWeightError(false);
    // ----------------------------------------------------------------

    if (height === "") {
      alert("You must fill height");
      setHeightError(true);
      return;
    }

    if (isNaN(parseInt(height))) {
      alert("Height, must be a number");
      setHeightError(true);
      return;
    }

    if (heightNumber < 30 || heightNumber > 250) {
      alert("Height must be greater than 30cm and less than 250cm");
      setHeightError(true);
      return;
    }
    setHeightError(false);
    // ----------------------------------------------------------------

    if (fatCorporal === "") {
      alert("You must fill fat corporal");
      setFatCorporalError(true);
      return;
    }

    if (isNaN(parseInt(fatCorporal))) {
      alert("Fat corporal, must be a number");
      setFatCorporalError(true);
      return;
    }

    if (fatCorporalNumber < 0 || fatCorporalNumber > 100) {
      alert("Fat corporal must be greater than 0% and less than 100%");
      setFatCorporalError(true);
      return;
    }
    setFatCorporalError(false);
    // ----------------------------------------------------------------
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
            className={nameError ? "error" : ""}
          />

          <label htmlFor="weight">weight:</label>
          <input
            onChange={(event) => setWeight(event.target.value)}
            value={weight}
            // type={}
            placeholder={"Type the patient's weight"}
            className={weightError ? "error" : ""} //eh verdadeiro? sim, nao
            // className={}
          />

          <label htmlFor="height">height:</label>
          <input
            onChange={(event) => setHeight(event.target.value)}
            value={height}
            // type={}
            placeholder={"Type the patient's height"}
            className={heightError ? "error" : ""}
            // className={}
          />

          <label htmlFor="fatCorporal">fatCorporal:</label>
          <input
            onChange={(event) => setFatCorporal(event.target.value)}
            value={fatCorporal}
            // type={}
            placeholder={"Type the patient's fat corporal"}
            className={fatCorporalError ? "error" : ""}
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
