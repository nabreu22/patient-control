import "./Table.css";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Button from "../Button";
import TableRow from "./TableRow";

const Table = (props) => {
  return (
    <section>
      <table>
        <TableHead
          name={"Name"}
          weight={"Weight(kg)"}
          height={"Height(m)"}
          fatCorporal={"Fat Corporal(%)"}
          bmi={"BMI"}
        />
        <TableBody>
          {props.patientsList.map((patient) => (
            <TableRow
              key={patient.id}
              name={patient.name}
              weight={patient.weight}
              height={patient.height}
              fatCorporal={patient.fatCorporal + "%"}
            />
          ))}
        </TableBody>
      </table>

      <div>
        <label htmlFor="filter-table">Filter:</label>
        <input
          type="text"
          name="filter"
          id="filter-table"
          placeholder="type o name do patient"
        />
        <Button name={"Find Patient"} />
      </div>
    </section>
  );
};

export default Table;
