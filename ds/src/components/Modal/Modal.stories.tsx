import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";

const meta: Meta<typeof Modal> = {
  title: "Componentes/Modal",
  component: Modal,
};
export default meta;

type Story = StoryObj<typeof Modal>;


function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Abrir modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Excluir componente?"
        actions={[
          { label: "Cancelar", variant: "secondary", onClick: () => setIsOpen(false) },
          { label: "Excluir", variant: "danger", onClick: () => setIsOpen(false) },
        ]}
      >
        Essa ação não pode ser desfeita. O componente será removido do Sistema de Design.
      </Modal>
    </>
  );
}

export const Padrao: Story = {
  render: () => <ModalDemo />,
};
