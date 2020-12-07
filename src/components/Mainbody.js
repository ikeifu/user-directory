import React, { useState } from "react";
import CardBody from "./Cardbody";
function MainBody() {
  const [sortState, setSortState] = useState({
    employees: [],
    search: "",
    sortBy: "",
    asc: true,
  });
  const sortList = (input) => {
    console.log("poggers");
    if (sortState.sortBy === input) {
      let sort;
      if (sortState.asc) {
        sort = sortState.employees.sort((a, b) =>
          a[input] < b[input] ? 1 : -1
        );
      } else {
        sort = sortState.employees.sort((a, b) =>
          a[input] > b[input] ? 1 : -1
        );
      }
      setSortState({
        ...sortState,
        employees: sort,
        sortBy: input,
        asc: !sortState.asc,
      });
    } else {
      setSortState({
        ...sortState,
        employees: sortState.employees.sort((a, b) =>
          a[input] > b[input] ? 1 : -1
        ),
        sortBy: input,
        asc: !sortState.asc,
      });
    }
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" onClick={sortList}>
            Name
          </th>
          <th scope="col" onClick={sortList}>
            Role
          </th>
          <th scope="col" onClick={sortList}>
            Department
          </th>
        </tr>
      </thead>
      <CardBody />
    </table>
  );
}
export default MainBody;
