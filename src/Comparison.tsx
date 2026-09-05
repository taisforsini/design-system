import { useState } from "react";
import  FormularioPuro  from "./pages/FormularioPuro/index";
import FormularioDS from "./pages/FomularioDS/index";

export default function Comparison() {
  const [versao, setVersao] = useState<"pura" | "ds">("ds");

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
        <button
          onClick={() => setVersao("pura")}
     style={{
            padding: "8px 16px",
            fontWeight: versao === "pura" ? "bold" : "normal",
            cursor: "pointer",
          }}
        >
          Versão sem design system
        </button>
        <button
          onClick={() => setVersao("ds")}
          style={{
            padding: "8px 16px",
            fontWeight: versao === "ds" ? "bold" : "normal",
            cursor: "pointer",
          }}
        >
          Versão com Design System
        </button>
      </div>

      {versao === "pura" ? <FormularioPuro /> : <FormularioDS />}
    </div>
  );
}