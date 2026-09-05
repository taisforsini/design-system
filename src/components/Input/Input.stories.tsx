import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Componentes/Input",
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Padrao: Story = {
  args: { label: "Nome completo", placeholder: "Digite seu nome" },
};

export const ComErro: Story = {
  args: {
    label: "E-mail",
    placeholder: "voce@exemplo.com",
    errorMessage: "E-mail inválido",
  },
};

export const ComTextoDeApoio: Story = {
  args: {
    label: "Usuário",
    placeholder: "Digite seu usuário",
    helperText: "Use apenas letras minúsculas e números",
  },
};
