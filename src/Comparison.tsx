import { useState } from "react";
import FormularioPuro from "./pages/FormularioPuro/index";
import FormularioDS from "./pages/FomularioDS/index";
import { Button } from "./components/Button/Button";

export default function Comparison() {
  const [versao, setVersao] = useState<"pura" | "ds">("ds");

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          marginTop: 24,
        }}
      >
        <Button variant={versao === "pura" ? "primary" : "secondary"} onClick={() => setVersao("pura")} >
          Versão sem design system
        </Button>
        <Button variant={versao === "ds" ? "primary" : "secondary"} onClick={() => setVersao("ds")}>
          Versão com Design System
        </Button>
      </div>

      {versao === "pura" ? <FormularioPuro /> : <FormularioDS />}
    </div>
  );
}
