import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { useTheme } from "../hooks/useTheme";

export default function FallbackComponent() {
  // const [darkMode] = useContext(ThemeContext)
  const [darkMode] = useTheme();
  return (
    <h3
      className={`text-2xl p-4 font-bold text-center pt-10 min-h-screen ${darkMode ? "darkModeActive" : ""}`}
    >
      Loading...
    </h3>
  );
}
