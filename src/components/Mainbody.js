import React, { useEffect, useState } from "react";
import CardBody from "./Cardbody";
import { getAllEmployees } from "../util/API";
import SearchBar from "./SearchBar";
function MainBody() {
  const [sortState, setSortState] = useState({
    sortBy: "",
    asc: true,
    search: "",
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
  const updateSearch = (term) => {
    setSortState({
      ...sortState,
      search: term,
    });
    
  };
  const [employeesState, setEmployeesState] = useState([]);

  useEffect(() => {
    getAllEmployees.then((data) => {
      setEmployeesState(data);
    });
  }, []);
  return (
    <div>
      <SearchBar updateSearch={updateSearch} />
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
    </div>
  );
}
export default MainBody;
