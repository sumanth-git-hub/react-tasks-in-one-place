import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { useOutletContext } from "react-router-dom";

export default function Accordion({ children }) {
  // const [accordion, isOpenAccordion] = useState(false)
  const [darkMode] = useTheme();

  return (
    <div className="w-full max-w-6xl py-4">
      {children}
    </div>
  );
}
