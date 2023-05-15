import "./Table.css";

const TableRow = (props) => {
  return (
    <tr className="patient" id="first-patient" key={props.key}>
      <td className="info-name">{props.name}</td>
      <td className="info-weight">{props.weight}</td>
      <td className="info-height">{props.height}</td>
      <td className="info-fat">{props.fatCorporal}</td>
      <td className="info-bmi">{props.bmi}</td>
    </tr>
  );
};

export default TableRow;
