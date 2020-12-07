import React, { Component } from "react";

class CardBody extends Component {
  render() {
    return (
        
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Department</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Fisherman</td>
            <td>Fish Department</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default CardBody;
