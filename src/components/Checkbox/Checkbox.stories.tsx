import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Componentes/Checkbox",
  component: Checkbox,
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Padrao: Story = {
  args: { label: "Aceito receber novidades por e-mail" },
};

export const Marcado: Story = {
  args: { label: "Aceito os termos e condições", defaultChecked: true },
};
