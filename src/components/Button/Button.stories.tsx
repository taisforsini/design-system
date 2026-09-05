import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Componentes/Button",
  component: Button,
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "danger"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primario: Story = {
  args: { variant: "primary", children: "Salvar" },
};

export const Secundario: Story = {
  args: { variant: "secondary", children: "Cancelar" },
};

export const Perigo: Story = {
  args: { variant: "danger", children: "Excluir" },
};

export const Desabilitado: Story = {
  args: { variant: "primary", children: "Enviando...", disabled: true },
};
