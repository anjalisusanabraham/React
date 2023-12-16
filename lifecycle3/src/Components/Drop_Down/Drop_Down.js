import React, { useState } from 'react';

const Drop_Down = () => {
  const options = ["NIhala", "Vinsha", "Anjali","Akhil",];
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
        <option value="" disabled>Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>

      {selectedOption && (
        <p>Selected Employees: {selectedOption}</p>
      )}

{/* <button onClick={addEmp}>Add Employee</button> */}
    </div>
  );
};

export default Drop_Down;