import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";

export default function FilterComponent({
  query,
  setQuery,
  placeholderContent,
}) {
  const [darkMode] = useTheme();
  // const [filterValue, setFilterValue] = useState(null)
  return (
    <section className="relative pb-24">
      <div
        className={`w-full max-w-xs md:max-w-lg px-4 py-2 rounded-xl flex flex-row items-center my-4 fixed z-1 ${darkMode ? "darkShadow bg-black" : "applyShadow bg-white"}`}
      >
        <i className="fa-solid fa-magnifying-glass px-4"></i>
        <input
          type="text"
          className="w-full outline-none"
          placeholder={placeholderContent}
          onChange={(e) => {
            setQuery(e.target.value.toLowerCase());
            // console.log(query)
          }}
        />
      </div>
    </section>
  );
}
