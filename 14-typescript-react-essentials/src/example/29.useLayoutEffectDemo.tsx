import React, { useState, useEffect, useLayoutEffect } from "react";

function EffectDemo() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    // Runs AFTER paint → flicker visible
    if (color === "red") {
      setColor("blue");
    }
  }, [color]);

  return (
    <div style={{ width: 200, height: 100, background: color, margin: 10 }}>
      useEffect Box
    </div>
  );
}

function LayoutEffectDemo() {
  const [color, setColor] = useState("red");

  useLayoutEffect(() => {
    // Runs BEFORE paint → no flicker
    if (color === "red") {
      setColor("blue");
    }
  }, [color]);

  return (
    <div style={{ width: 200, height: 100, background: color, margin: 10 }}>
      useLayoutEffect Box
    </div>
  );
}

export default function EffectApp() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <EffectDemo />
      <LayoutEffectDemo />
    </div>
  );
}

