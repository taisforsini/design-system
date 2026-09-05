import { useState } from "react";
import { Input } from "../../components/Input/Input";
import { Checkbox } from "../../components/Checkbox/Checkbox";

const FormularioDS = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
  const [termsAndConditionsChecked, setTermsAndConditionsChecked] =
    useState<boolean>(false);

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
        errorMessage={emailErrorMessage}
      />
      <Checkbox
        label="Aceito os termos"
        checked={termsAndConditionsChecked}
        onChange={(e) => setTermsAndConditionsChecked(e.target.checked)}
      />
    </form>
  );
};

export default FormularioDS;
