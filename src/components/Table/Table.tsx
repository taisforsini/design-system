import type { ReactNode } from "react";
import "../../styles/tokens.css";
import "./Table.css";

export interface TableColumn<T> {
  key: keyof T;
  header: string;
  align?: "left" | "center" | "right";
  render?: (value: T[keyof T], row: T) => ReactNode;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  emptyMessage?: string;
}


export function Table<T extends Record<string, unknown>>({
  columns,
  data,
  emptyMessage = "Nenhum dado disponível.",
}: TableProps<T>) {
  return (
    <table className="ds-table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)} className={`ds-table-th ds-table-align-${col.align ?? "left"}`}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td className="ds-table-empty" colSpan={columns.length}>
              {emptyMessage}
            </td>
          </tr>
        ) : (
          data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col) => (
                <td key={String(col.key)} className={`ds-table-td ds-table-align-${col.align ?? "left"}`}>
                  {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? "")}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
