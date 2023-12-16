import React, { useState } from 'react';

const EmployeeList1 = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Anjali', selected: false },
    { id: 2, name: 'Vinsha', selected: false },
    { id: 3, name: 'Nihala', selected: false },
  ]);
  const [newEmployeeId, setNewEmployeeId] = useState('');
  const [newEmployeeName, setNewEmployeeName] = useState('');

  const handleCheckboxChange = (id) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === id ? { ...employee, selected: !employee.selected } : employee
    );
    setEmployees(updatedEmployees);
  };

  const handleNewEmployeeIdChange = (e) => {
    setNewEmployeeId(e.target.value);
  };

  const handleNewEmployeeNameChange = (e) => {
    setNewEmployeeName(e.target.value);
  };

  const handleAddEmployee = () => {
    if (newEmployeeId.trim() === '' || newEmployeeName.trim() === '') {
      alert('Please enter both Employee ID and Name!');
      return;
    }

    const employeeExists = employees.some((emp) => emp.id.toString() === newEmployeeId);

    if (employeeExists) {
      alert('Employee ID already exists!');
      return;
    }

    const newEmployee = {
      id: parseInt(newEmployeeId),
      name: newEmployeeName,
      selected: false,
    };

    setEmployees([...employees, newEmployee]);
    setNewEmployeeId('');
    setNewEmployeeName('');
  };

  const selectedEmployees = employees.filter((employee) => employee.selected);

  return (
    <div>
      <h2>Employee List</h2>
      <div>
        <label>
          Employee ID:
          <input type="text" value={newEmployeeId} onChange={handleNewEmployeeIdChange} />
        </label>
        <label>
          Employee Name:
          <input type="text" value={newEmployeeName} onChange={handleNewEmployeeNameChange} />
        </label>
        <button onClick={handleAddEmployee}>Add Employee</button>
      </div>
     
      <h3>Employee List with Checkbox</h3>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={employee.selected}
                    onChange={() => handleCheckboxChange(employee.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br /><br />
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {selectedEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList1;
