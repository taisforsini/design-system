import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table } from "./Table";
import { Badge } from "../Badge/Badge";

interface ComponenteStatus {
  nome: string;
  situacao: "Especificado" | "Planejado";
}

const meta: Meta<typeof Table<ComponenteStatus>> = {
  title: "Componentes/Table",
  component: Table<ComponenteStatus>,
};
export default meta;

type Story = StoryObj<typeof Table<ComponenteStatus>>;

const dados: ComponenteStatus[] = [
  { nome: "Button", situacao: "Especificado" },
  { nome: "Input", situacao: "Especificado" },
  { nome: "Checkbox", situacao: "Especificado" },
  { nome: "Select", situacao: "Especificado" },
  { nome: "Card", situacao: "Planejado" },
  { nome: "Modal", situacao: "Planejado" },
  { nome: "Badge", situacao: "Planejado" },
  { nome: "Tabs", situacao: "Planejado" },
  { nome: "Table", situacao: "Planejado" },
];

export const ComponentesDoTCC: Story = {
  args: {
    columns: [
      { key: "nome", header: "Componente" },
      {
        key: "situacao",
        header: "Situação Atual",
        align: "center",
        render: (value) => (
          <Badge variant={value === "Especificado" ? "success" : "neutral"}>{String(value)}</Badge>
        ),
      },
    ],
    data: dados,
  },
};

export const Vazia: Story = {
  args: {
    columns: [
      { key: "nome", header: "Componente" },
      { key: "situacao", header: "Situação Atual" },
    ],
    data: [],
  },
};
