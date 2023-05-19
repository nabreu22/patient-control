import Button from "../Button";
import "./Table.css";

const TableRow = (props) => {
  const bmi = props.weight / ((props.height / 100) * (props.height / 100));

  return (
    <tr className="patient" id="first-patient">
      <td className="info-name">{props.name}</td>
      <td className="info-weight">{props.weight}</td>
      <td className="info-height">{props.height}</td>
      <td className="info-fat">{props.fatCorporal}</td>
      <td className="info-bmi">{bmi.toFixed(0)}</td>
      <td>
        <Button onClick={() => props.removePatients(props.id)}>Delete</Button>
      </td>
    </tr>
  );
};

export default TableRow;
