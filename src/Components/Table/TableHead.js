import "./Table.css";

const TableHead = (props) => {
  return (
    <thead>
      <tr className="table-head">
        <th>{props.name}</th>
        <th>{props.weight}</th>
        <th>{props.height}</th>
        <th>{props.fatCorporal}</th>
        <th>{props.bmi}</th>
      </tr>
    </thead>
  );
};

export default TableHead;
