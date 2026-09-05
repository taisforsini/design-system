import { useId, useState, type ReactNode, type KeyboardEvent } from "react";
import "../../styles/tokens.css";
import "./Tabs.css";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultTabId?: string;
}

export function Tabs({ items, defaultTabId }: TabsProps) {
  const [activeId, setActiveId] = useState(defaultTabId ?? items[0]?.id);
  const baseId = useId();

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>, index: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + items.length) % items.length;
    setActiveId(items[nextIndex].id);
    document.getElementById(`${baseId}-tab-${items[nextIndex].id}`)?.focus();
  }

  return (
    <div className="ds-tabs">
      <div className="ds-tabs-list" role="tablist">
        {items.map((item, index) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              id={`${baseId}-tab-${item.id}`}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={isActive ? 0 : -1}
              className={["ds-tabs-tab", isActive ? "ds-tabs-tab--active" : ""].filter(Boolean).join(" ")}
              onClick={() => setActiveId(item.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          id={`${baseId}-panel-${item.id}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${item.id}`}
          hidden={item.id !== activeId}
          className="ds-tabs-panel"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
