import './App.css';

function App() {
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
        />
        <input
          type="text"
          placeholder="Preço"
          name="cost"
          className="register-input"
        />
        <input
          type="text"
          placeholder="Categoria"
          name="category"
          className="register-input"
        />
        
        {/* Register Button */}
        <button>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
