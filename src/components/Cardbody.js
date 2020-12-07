import React, { Component } from "react";
import API from "../utils/API";
class CardBody extends Component {
  render() {
    return (
      <>
        {API.getAllEmployees().then((employees) => {
          employees.map((employee) => {
            return (
              <tbody key={employee.id}>
                <th scope="col">{employee.name}</th>
                <th scope="col">{employee.role}</th>
                <th scope="col">{employee.department}</th>
              </tbody>
            );
          });
        })}
      </>
    );
  }
}
export default CardBody;
