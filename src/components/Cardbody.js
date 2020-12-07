import React, { useEffect, useState } from "react";
import { getAllEmployees } from "../util/API";
function CardBody() {
  const [employeesState, setEmployeesState] = useState([]);

  useEffect(() => {
    getAllEmployees.then((data) => {
      setEmployeesState(data);
    });
  }, []);

  return (
    <>
      {employeesState.map((employee) => {
        return (
          <tbody key={employee.id}>
            <th scope="col">{employee.name}</th>
            <th scope="col">{employee.role}</th>
            <th scope="col">{employee.department}</th>
          </tbody>
        );
      })}
    </>
  );
}
export default CardBody;
