import { forwardRef, useId, type SelectHTMLAttributes } from "react";
import "../../styles/tokens.css";
import "./Select.css";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  errorMessage?: string;
  helperText?: string;
  placeholder?: string;
}


export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, errorMessage, helperText, placeholder, id, className, ...rest }, ref) => {
    const generatedId = useId();
    const selectId = id ?? generatedId;
    const messageId = errorMessage || helperText ? `${selectId}-message` : undefined;

    return (
      <div className="ds-select-group">
        <label htmlFor={selectId} className="ds-select-label">
          {label}
        </label>
        <select
          ref={ref}
          id={selectId}
          className={["ds-select", errorMessage ? "ds-select--error" : "", className].filter(Boolean).join(" ")}
          aria-invalid={Boolean(errorMessage)}
          aria-describedby={messageId}
          defaultValue=""
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {(errorMessage || helperText) && (
          <span id={messageId} className={errorMessage ? "ds-select-error-text" : "ds-select-helper-text"}>
            {errorMessage ?? helperText}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
