import type { HTMLAttributes, ReactNode } from "react";
import { Button, type ButtonProps } from "../Button/Button";
import "../../styles/tokens.css";
import "./Card.css";

export interface CardAction extends Omit<ButtonProps, "children"> {
  label: string;
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: ReactNode;
  actions?: CardAction[];
}

export function Card({ title, children, actions, className, ...rest }: CardProps) {
  return (
    <div className={["ds-card", className].filter(Boolean).join(" ")} {...rest}>
      <div className="ds-card-header">
        <h3 className="ds-card-title">{title}</h3>
      </div>
      <div className="ds-card-body">{children}</div>
      {actions && actions.length > 0 && (
        <div className="ds-card-footer">
          {actions.map(({ label, ...buttonProps }, index) => (
            <Button key={index} {...buttonProps}>
              {label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
