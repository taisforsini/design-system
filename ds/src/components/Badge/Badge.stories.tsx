import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Componentes/Badge",
  component: Badge,
  argTypes: {
    variant: { control: "select", options: ["primary", "success", "warning", "error", "neutral"] },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Especificado: Story = {
  args: { variant: "success", children: "Especificado" },
};

export const Planejado: Story = {
  args: { variant: "neutral", children: "Planejado" },
};

export const EmAlerta: Story = {
  args: { variant: "warning", children: "Em revisão" },
};

export const ComErro: Story = {
  args: { variant: "error", children: "Bloqueado" },
};
