import React, {useState} from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState();
  
  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  return (
    // HTML
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Scrim Shop</h1>

        {/* Inputs: name, cost and category */}
        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="register-input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          placeholder="Preço"
          name="cost"
          className="register-input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          placeholder="Categoria"
          name="category"
          className="register-input"
          onChange={handleChangeValues}
        />

        {/* Register Button */}
        <button>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
