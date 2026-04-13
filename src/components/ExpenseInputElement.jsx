import React from 'react'
import { useTheme } from '../hooks/useTheme'

export default function ExpenseInputElement({id,name,value,onChange,inputError,label,placeholder}) {
    const [darkMode] = useTheme()
  return (
     <div className="input-container flex flex-col mb-6 relative">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          // ref={titleRef}
          value={value}
          // onChange={(e) => setInputValues((prevState) => ({...prevState, title: e.target.value}))}
          onChange={onChange}
          className={`${darkMode ? "darkShadow" : "applyShadow"} rounded`}
          placeholder={placeholder}
        />
        <p className="text-xs text-red-500 mt-1.5 absolute top-full left-2">{inputError}</p>
      </div>
  )
}
