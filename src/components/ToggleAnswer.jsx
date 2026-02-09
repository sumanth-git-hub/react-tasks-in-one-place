import React, { useState } from 'react'
import { useTheme } from '../hooks/UseTheme'

export default function ToggleAnswer({passQuestion, passAnswer}) {

    const [accordion, isOpenAccordion] = useState(false)

    const [darkMode] = useTheme()

  return (
       <div className={`rounded-lg my-4 p-4 relative  ${darkMode ? 'darkShadow' : "applyShadow"}`}>
            <h3 onClick={() => {
              isOpenAccordion(!accordion)
              // console.log(accordion)
            }} className={`hover:text-amber-500 text-lg flex justify-between items-center cursor-pointer transition-all duration-500 ease-in-out ${accordion ? 'text-amber-500' : ''}`}>{passQuestion} <i className={`fa-solid fa-angle-down transition duration-500 ease-in-out ${accordion ? 'transform rotate-180 text-amber-500': 'rotate-0'}`}></i></h3>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
            accordion ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}>
              <p className={`text-sm`}>{passAnswer}</p>
            </div>
        </div>
  )
}
