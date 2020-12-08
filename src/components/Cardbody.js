import React from "react";
function CardBody({ sortState, employees }) {
  console.log(employees);
  console.log("stringify", JSON.stringify(employees));
  console.log(JSON.stringify(employees[0]));
  //   useEffect(() => {
  //     getAllEmployees.then((data) => {
  //       setEmployeesState(data);
  //     });
  //   }, []);
  //   useEffect(() => {
  //     let sort;
  //     if (sortState.asc) {
  //       sort = employeesState.sort((a, b) => {
  //         console.log(sortState.sortBy);
  //         return a[sortState.sortBy] > b[sortState.sortBy] ? 1 : -1;
  //       });
  //     } else {
  //       sort = employeesState.sort((a, b) =>
  //         a[sortState.sortBy] < b[sortState.sortBy] ? 1 : -1
  //       );
  //     }
  //     setEmployeesState(sort);
  //   }, [sortState, employeesState]);
  return (
    <>
      {employees.map((employee) => {
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
