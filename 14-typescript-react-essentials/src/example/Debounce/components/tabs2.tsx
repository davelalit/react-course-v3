import React from "react";
import { useState } from "react";
import useDebounce2 from "../hooks/useDebounce2";

// ✅ Sample Static JSON Data
const data: Record<string, string[]> = {
  tab1: ["Apple", "Banana", "Cherry", "Date", "Grape", "Mango"],
  tab2: ["Red", "Green", "Blue", "Yellow", "Purple", "Orange"],
  tab3: ["Dog", "Cat", "Elephant", "Tiger", "Lion", "Zebra"]
};

// ✅ SearchBox Component
function SearchBox({ items }) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce2(query, 300);

  const results = React.useMemo(() => {
    if (!debouncedQuery) return [];
    return items.filter(item =>
      item.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [debouncedQuery, items]);

  return (
    <div style={{ marginTop: "1rem" }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      />
      <ul>
        {results.map((r, idx) => (
          <li key={idx}>{r}</li>
        ))}
      </ul>
    </div>
  );
}


export function Tabs2() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      <div style={{ display: "flex", gap: "1rem" }}>
        {Object.keys(data).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "10px",
              background: activeTab === tab ? "#007bff" : "#ccc",
              color: "white",
              border: "none",
              borderRadius: "4px"
            }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <SearchBox items={data[activeTab]} />
    </div>
  );
}

