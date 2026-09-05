import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Componentes/Tabs",
  component: Tabs,
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Padrao: Story = {
  args: {
    items: [
      { id: "perfil", label: "Perfil", content: "Informações do perfil do usuário." },
      { id: "seguranca", label: "Segurança", content: "Configurações de senha e autenticação." },
      { id: "notificacoes", label: "Notificações", content: "Preferências de e-mail e alertas." },
    ],
  },
};
