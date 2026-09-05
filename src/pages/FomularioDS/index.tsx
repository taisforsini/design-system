import { useState } from "react";
import { Input } from "../../components/Input/Input";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Button } from "../../components/Button/Button";
import { Select } from "../../components/Select/Select";
import "./FormularioDS.css";

const FormularioDS = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
  const [termsAndConditionsChecked, setTermsAndConditionsChecked] =
    useState<boolean>(false);
  const [team, setTeam] = useState<string>("");

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
    <form onSubmit={handleSubmit} className="form-ds">
      <h1 className="form-ds-title">
        Formulário de cadastro com Design System
      </h1>
      <Input
        label="Nome completo"
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Email"
        placeholder="email@exemplo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={emailErrorMessage}
      />
      <Checkbox
        label="Aceito os termos"
        checked={termsAndConditionsChecked}
        onChange={(e) => setTermsAndConditionsChecked(e.target.checked)}
      />

      <Select
        label="Equipe"
        placeholder="Selecione uma equipe"
        value={team}
        onChange={(e) => setTeam(e.target.value)}
        options={teams}
      />

      <div className="form-ds-btns">
        <Button type="submit" variant="primary">
          Enviar
        </Button>
        <Button type="button" variant="secondary">
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default FormularioDS;
