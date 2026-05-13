import React from "react";
import { useTheme } from "../hooks/useTheme";

export default function ExpenseCategoryInput({
  label,
  onChange,
  name,
  id,
  defaultValue,
  inputError,
  value,
  options,
}) {
  const [darkMode] = useTheme();

  return (
    <div className="input-container flex flex-col mb-6 relative">
      <label htmlFor={id}>{label}</label>
      <select
        // ref={categoryRef}
        value={value}
        // onChange={(e) => setInputValues((prevState) => ({...prevState, category: e.target.value}))}
        onChange={onChange}
        name={name}
        id={id}
        className={`h-7 cursor-pointer text-inherit ${
          darkMode ? "darkShadow" : "applyShadow"
        } rounded text-sm pl-2`}
      >
        <option value="" hidden={defaultValue}>
          {defaultValue}
        </option>
        {options.map((option, i) => {
          return (
            <option key={i} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <p className="text-xs text-red-500 mt-1.5 absolute top-full">
        {inputError}
      </p>
    </div>
  );
}
