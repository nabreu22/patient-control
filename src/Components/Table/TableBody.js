import "./Table.css";

const TableBody = (props) => {
  return <tbody id="table-patients">{props.children}</tbody>;
};

export default TableBody;
