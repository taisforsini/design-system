import { Routes, Route, Link } from "react-router-dom";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { Select } from "./components/Select/Select";
import { Badge } from "./components/Badge/Badge";
import { Card } from "./components/Card/Card";
import { Modal } from "./components/Modal/Modal";
import { Tabs } from "./components/Tabs/Tabs";
import { Table } from "./components/Table/Table";
import Comparison from "./Comparison";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "center", gap: 16, padding: 16 }}>
        <Link to="/">Componentes DS</Link>
        <Link to="/comparison">Experimento comparativo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<DSDisplay />} />
        <Route path="/comparison" element={<Comparison />} />
      </Routes>
    </div>
  );
}

function DSDisplay() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ maxWidth: 480, margin: "40px auto", display: "flex", flexDirection: "column", gap: 24 }}>
      <h1>Sistema de Design — Componentes</h1>

      <Input label="Nome completo" placeholder="Digite seu nome" />
      <Input label="E-mail" type="email" placeholder="voce@exemplo.com" errorMessage="E-mail inválido" />

      <Select
        label="Equipe"
        placeholder="Selecione uma equipe"
        options={[
          { value: "marketing", label: "Marketing" },
          { value: "ti", label: "Tecnologia da Informação" },
          { value: "logistica", label: "Logística" },
        ]}
      />

      <Checkbox label="Aceito receber novidades por e-mail" />

      <div style={{ display: "flex", gap: 8 }}>
        <Button variant="primary">Salvar</Button>
        <Button variant="secondary">Cancelar</Button>
        <Button variant="danger" onClick={() => setIsModalOpen(true)}>
          Excluir
        </Button>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <Badge variant="success">Especificado</Badge>
        <Badge variant="neutral">Planejado</Badge>
      </div>

      <Card title="Exemplo de Card" actions={[{ label: "Ver detalhes", variant: "secondary" }]}>
        Este card reaproveita o componente Button no rodapé, em vez de recriar um botão do zero.
      </Card>

      <Tabs
        items={[
          { id: "perfil", label: "Perfil", content: "Informações do perfil do usuário." },
          { id: "seguranca", label: "Segurança", content: "Configurações de senha e autenticação." },
        ]}
      />

      <Table
        columns={[
          { key: "nome", header: "Componente" },
          {
            key: "situacao",
            header: "Situação Atual",
            align: "center",
            render: (value) => (
              <Badge variant={value === "Especificado" ? "success" : "neutral"}>{String(value)}</Badge>
            ),
          },
        ]}
        data={[
          { nome: "Button", situacao: "Especificado" },
          { nome: "Card", situacao: "Planejado" },
        ]}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Excluir cadastro?"
        actions={[
          { label: "Cancelar", variant: "secondary", onClick: () => setIsModalOpen(false) },
          { label: "Excluir", variant: "danger", onClick: () => setIsModalOpen(false) },
        ]}
      >
        Essa ação não pode ser desfeita.
      </Modal>
    </div>
  );
}