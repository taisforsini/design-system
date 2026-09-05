import { useState } from "react";
import { Input } from "../../components/Input/Input";

const FormularioDS = () => {
  const [name, setName] = useState<string>();
  return (
    <form>
      <h1>Formulário de cadastro com Design System</h1>
      <Input
        label="Nome completo"
        placeholder="Nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
};

export default FormularioDS;
