import type { HTMLAttributes } from "react";
import "../../styles/tokens.css";
import "./Badge.css";

export type BadgeVariant = "primary" | "success" | "warning" | "error" | "neutral";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({ variant = "neutral", className, children, ...rest }: BadgeProps) {
  const classes = ["ds-badge", `ds-badge--${variant}`, className].filter(Boolean).join(" ");

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
