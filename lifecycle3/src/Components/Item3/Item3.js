import React, { useState } from 'react';

const Item3 = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedItemsList, setSelectedItemsList] = useState([]);

  const handleDropdownChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleButtonClick = () => {
    if (selectedItem) {
      setSelectedItemsList((prevList) => [...prevList, selectedItem]);
      setSelectedItem('');
    }
  };

  return (
    <div>
      <h1>React Dropdown and Button</h1>
      <select value={selectedItem} onChange={handleDropdownChange}>
        <option value="">Select an option</option>
        <option value="React">React</option>
        <option value="Python">Python</option>
        <option value="Flutter">Flutter</option>
        <option value="Express">Express</option>
        <option value="Node">Node</option>
      </select>

      <button onClick={handleButtonClick}>Add to List</button>

      {selectedItemsList.length > 0 && (
        <div>
          <h2>Selected Items:</h2>
          
            {selectedItemsList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          
        </div>
      )}
    </div>
  );
};

export default Item3;