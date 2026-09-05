import { useState } from "react";
import { Input } from "../../components/Input/Input";

const FormularioDS = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>();

  return (
    <form>
      <h1>Formulário de cadastro com Design System</h1>
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
      />
      errorMessage={emailErrorMessage}
    </form>
  );
};

export default FormularioDS;
