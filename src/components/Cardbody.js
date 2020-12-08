import React from "react";
function CardBody({ search, employees }) {
  return (
    <>
      {employees
        .filter((employee) =>
          search
            ? employee.name.toLowerCase().includes(search.toLowerCase())
            : true
        )
        .map((employee) => {
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
