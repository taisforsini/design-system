import { forwardRef, useId, type InputHTMLAttributes } from "react";
import "../../styles/tokens.css";
import "./Checkbox.css";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id, className, ...rest }, ref) => {
    const generatedId = useId();
    const checkboxId = id ?? generatedId;

    return (
      <div className="ds-checkbox-group">
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          className={["ds-checkbox", className].filter(Boolean).join(" ")}
          {...rest}
        />
        <label htmlFor={checkboxId} className="ds-checkbox-label">
          {label}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
