import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Componentes/Card",
  component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Padrao: Story = {
  args: {
    title: "Convite para reunião",
    children: "A reunião de alinhamento do projeto está marcada para quinta-feira, às 14h.",
  },
};

export const ComAcoes: Story = {
  args: {
    title: "Excluir componente?",
    children: "Essa ação não pode ser desfeita. O componente será removido do Sistema de Design.",
    actions: [
      { label: "Cancelar", variant: "secondary" },
      { label: "Excluir", variant: "danger" },
    ],
  },
};
