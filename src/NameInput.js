// NameInput.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NameInput.css';

function NameInput() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleNameSubmit = () => {
    if (userName.trim() === '') {
      alert('Enter your Good name.');
    } else {
   
      navigate('/cards', { state: { userName } });
    }
  };

  return (
    <div className="name-popup">
      <p>Please enter your name:</p>
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      <button onClick={handleNameSubmit}>join</button>
    </div>
  );
}

export default NameInput;
