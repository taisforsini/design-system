import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Componentes/Select",
  component: Select,
};
export default meta;

type Story = StoryObj<typeof Select>;

const equipes = [
  { value: "marketing", label: "Marketing" },
  { value: "ti", label: "Tecnologia da Informação" },
  { value: "logistica", label: "Logística" },
];

export const Padrao: Story = {
  args: { label: "Equipe", options: equipes, placeholder: "Selecione uma equipe" },
};

export const ComErro: Story = {
  args: { label: "Equipe", options: equipes, placeholder: "Selecione uma equipe", errorMessage: "Selecione uma equipe para continuar" },
};
