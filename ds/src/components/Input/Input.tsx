import { forwardRef, useId, type InputHTMLAttributes } from "react";
import "../../styles/tokens.css";
import "./Input.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
  helperText?: string;
}


export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, helperText, id, className, ...rest }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const messageId = errorMessage || helperText ? `${inputId}-message` : undefined;

    return (
      <div className="ds-input-group">
        <label htmlFor={inputId} className="ds-input-label">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={["ds-input", errorMessage ? "ds-input--error" : "", className].filter(Boolean).join(" ")}
          aria-invalid={Boolean(errorMessage)}
          aria-describedby={messageId}
          {...rest}
        />
        {(errorMessage || helperText) && (
          <span id={messageId} className={errorMessage ? "ds-input-error-text" : "ds-input-helper-text"}>
            {errorMessage ?? helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
