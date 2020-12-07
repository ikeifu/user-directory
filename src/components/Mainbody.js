import React from "react";
import API from "../utils/API";
import Cardbody from "./Cardbody";
function MainBody() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Role</th>
          <th scope="col">Department</th>
        </tr>
      </thead>
      <Cardbody />
    </table>
  );
}
export default MainBody;
