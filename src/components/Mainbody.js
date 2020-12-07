import React, { useEffect, useState } from "react";
import CardBody from "./Cardbody";
import { getAllEmployees } from "../util/API";
function MainBody() {
  const [sortState, setSortState] = useState({
    sortBy: "",
    asc: true,
  });
  const sortList = (input) => {
    console.log("clicked");
    setSortState({
      ...sortState,
      sortBy: input,
      asc: !sortState.asc,
    });
    let sort;
    if (sortState.asc) {
      sort = employeesState.sort((a, b) => {
        return a[input] > b[input] ? 1 : -1;
      });
    } else {
      sort = employeesState.sort((a, b) => (a[input] < b[input] ? 1 : -1));
    }
    setEmployeesState(sort);
  };
  const [employeesState, setEmployeesState] = useState([]);

  useEffect(() => {
    getAllEmployees.then((data) => {
      setEmployeesState(data);
    });
  }, []);
  // useEffect(() => {
  //   let sort;
  //   if (sortState.asc) {
  //     sort = employeesState.sort((a, b) => {
  //       console.log(input);
  //       return a[sortState.sortBy] > b[sortState.sortBy] ? 1 : -1;
  //     });
  //   } else {
  //     sort = employeesState.sort((a, b) =>
  //       a[sortState.sortBy] < b[sortState.sortBy] ? 1 : -1
  //     );
  //   }
  //   setEmployeesState(sort);
  // }, [sortState, employeesState]);
  console.log("employeestate", employeesState);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" onClick={() => sortList("name")}>
            Name
          </th>
          <th scope="col" onClick={() => sortList("role")}>
            Role
          </th>
          <th scope="col" onClick={() => sortList("department")}>
            Department
          </th>
        </tr>
      </thead>
      <CardBody sortState={sortState} employees={employeesState} />
    </table>
  );
}
export default MainBody;
