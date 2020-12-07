import React from "react";
import CardBody from "./Cardbody";
function MainBody() {
  function orderName() {}
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" onClick={orderName}>
            Name
          </th>
          <th scope="col">Role</th>
          <th scope="col">Department</th>
        </tr>
      </thead>
      <CardBody />
    </table>
  );
}
export default MainBody;
