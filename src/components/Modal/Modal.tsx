import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Button, type ButtonProps } from "../Button/Button";
import "../../styles/tokens.css";
import "./Modal.css";

export interface ModalAction extends Omit<ButtonProps, "children"> {
  label: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  actions?: ModalAction[];
}


export function Modal({ isOpen, onClose, title, children, actions }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    dialogRef.current?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="ds-modal-overlay" onClick={onClose}>
      <div
        ref={dialogRef}
        className="ds-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ds-modal-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="ds-modal-header">
          <h2 id="ds-modal-title" className="ds-modal-title">
            {title}
          </h2>
          <button className="ds-modal-close" onClick={onClose} aria-label="Fechar">
            ×
          </button>
        </div>
        <div className="ds-modal-body">{children}</div>
        {actions && actions.length > 0 && (
          <div className="ds-modal-footer">
            {actions.map(({ label, ...buttonProps }, index) => (
              <Button key={index} {...buttonProps}>
                {label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
