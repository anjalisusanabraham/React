import React, { Component } from 'react';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        { id: '1', name: 'Anjali' },
        { id: '2', name: 'Vinsha' },
        { id: '3', name: 'Nandana' },
      ],
      newEmployeeId: '',
      newEmployeeName: '',
    };
  }

  handleNewEmployeeIdChange = (e) => {
    this.setState({ newEmployeeId: e.target.value });
  };

  handleNewEmployeeNameChange = (e) => {
    this.setState({ newEmployeeName: e.target.value });
  };

  handleAddEmployee = () => {
    const { employees, newEmployeeId, newEmployeeName } = this.state;

    if (newEmployeeId.trim() === '' || newEmployeeName.trim() === '') {
      alert('Please enter both Employee ID and Name!');
      return;
    }

    const employeeExists = employees.some((emp) => emp.id === newEmployeeId);
    
    if (employeeExists) {
      alert('Employee ID already exists!');
      return;
    }
    // const employeeExistsn = employees.some((emp)=> emp.name === newEmployeeName);
    // if (employeeExistsn) {
    //     alert('Employee name is alredy exist');
    //     return;
    // }

    const newEmployee = {
      id: newEmployeeId,
      name: newEmployeeName,
    };

    this.setState({
      employees: [...employees, newEmployee],
      newEmployeeId: '',
      newEmployeeName: '',
    });
  };

  render() {
    const { employees, newEmployeeId, newEmployeeName } = this.state;

    return (
      <div>
        <h2>Employee List</h2>
        <div>
          <label>
            Select an Employee:
            <select>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <br />
        <div>
          <label>
            Employee ID:
            <input
              type="text"
              value={newEmployeeId}
              onChange={this.handleNewEmployeeIdChange}
            />
          </label>
          <label>
            Employee Name:
            <input
              type="text"
              value={newEmployeeName}
              onChange={this.handleNewEmployeeNameChange}
            />
          </label>
          <button onClick={this.handleAddEmployee}>Add Employee</button>
        </div>
        <br />
        <center>
        <table border={2}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </center>
      </div>
    );
  }
}

export default EmployeeList;
