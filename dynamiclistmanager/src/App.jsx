import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (inputValue.trim() === '') return;
    setItems([...items, inputValue.trim()]);
    setInputValue('');
  };

  return (
    <div className="app-container">
      <div className="list-manager">
        <h1>Dynamic List Manager</h1>

        <div className="input-group">
          <input
            type="text"
            placeholder="Enter an item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleAddItem}>Add Item</button>
        </div>

        <div className="item-list">
          {items.length === 0 ? (
            <p className="empty">.First item</p>
          ) : (
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;