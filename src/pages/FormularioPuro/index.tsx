import React, { useState } from "react";
import "./FormularioPuro.css";

const FormularioPuro = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
  const [team, setTeam] = useState<string>("");
  const [termsAndConditionsChecked, setTermsAndConditionsChecked] =
    useState<boolean>(false);

  const teams = [
    { value: "marketing", label: "Marketing" },
    { value: "ti", label: "Tecnologia da Informação" },
    { value: "logistica", label: "Logística" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setEmailErrorMessage("E-mail inválido");
      return;
    }
    setEmailErrorMessage("");
    alert(`Cadastro enviado: ${name}, ${email}, ${team}`);
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
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

      <div className="custom-input">
        <label className="custom-input-label">Email</label>
        <input
          id="email"
          className={
            emailErrorMessage
              ? "custom-input custom-input-error"
              : "custom-input-field"
          }
          type="email"
          placeholder="email@exemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailErrorMessage && (
          <span className="custom-error-text">{emailErrorMessage}</span>
        )}
      </div>

      <div className="custom-input">
        <label className="custom-input">Equipe</label>
        <select
          id="team"
          className="custom-select"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        >
          <option value="" disabled>
            Selecione uma equipe
          </option>
          {teams.map((team) => (
            <option key={team.value} value={team.value}>
              {team.label}
            </option>
          ))}
        </select>
      </div>

      <div className="custom-checkbox">
        <input
          id="terms"
          type="checkbox"
          checked={termsAndConditionsChecked}
          onChange={(e) => setTermsAndConditionsChecked(e.target.checked)}
        />
        <label>Aceito os termos e condições</label>
      </div>

      <div className="form-buttons">
        <button type="submit" className="button button-primary">
          Enviar
        </button>
        <button type="button" className="button button-secondary">
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default FormularioPuro;
