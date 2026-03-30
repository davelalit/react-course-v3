import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

function TooltipWithEffect() {
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Runs AFTER paint → tooltip may flicker in wrong position
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCoords({ top: rect.bottom + 5, left: rect.left });
    }
  }, []);

  return (
    <div style={{ margin: "40px" }}>
      <button ref={buttonRef}>Hover me (useEffect)</button>
      <div
        style={{
          position: "absolute",
          top: coords.top,
          left: coords.left,
          background: "lightcoral",
          padding: "5px",
          borderRadius: "4px"
        }}
      >
        Tooltip
      </div>
    </div>
  );
}

function TooltipWithLayoutEffect() {
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    // Runs BEFORE paint → tooltip is positioned correctly immediately
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCoords({ top: rect.bottom + 5, left: rect.left });
    }
  }, []);

  return (
    <div style={{ margin: "40px" }}>
      <button ref={buttonRef}>Hover me (useLayoutEffect)</button>
      <div
        style={{
          position: "absolute",
          top: coords.top,
          left: coords.left,
          background: "lightgreen",
          padding: "5px",
          borderRadius: "4px"
        }}
      >
        Tooltip
      </div>
    </div>
  );
}

export default function LayoutEffectApp() {
  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      <TooltipWithEffect />
      <TooltipWithLayoutEffect />
    </div>
  );
}