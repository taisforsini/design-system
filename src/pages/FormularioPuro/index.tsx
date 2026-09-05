import { useState } from "react";
import "./FormularioPuro.css";

const FormularioPuro = () => {
  const [name, setName] = useState<string>("");

  return (
    <form className="form-wrapper">
      <h1 className="form-title">Formulário de cadastro sem Design System</h1>

      <div className="custom-input">
        <label className="custom-input-label">Nome completo</label>
        <input
          id="nome"
          className="custom-input-field"
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </form>
  );
};

export default FormularioPuro;
