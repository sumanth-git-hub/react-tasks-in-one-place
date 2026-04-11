import { Link, useOutletContext, useRouteError } from 'react-router-dom'
import HeaderComponent from './HeaderComponent';
import { useContext, useState } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import React from 'react';

export default function ErrorPage() {
    // const findError = useRouteError();
    const [darkMode] = useState(JSON.parse(localStorage.getItem("DarkMode")))
const [openModal, isOpenModal] = useState(null)

    // const [darkMode] = useContext(ThemeContext)

  return (
    <div className={`pt-15 ${darkMode ? "bg-black text-white": ""}`}>
      {/* <HeaderComponent  openModal={openModal} isOpenModal={isOpenModal}/> */}
    <div className={`w-full max-w-6xl p-4 m-auto min-h-screen text-center ${darkMode ? "darkModeActive": ""}`}>
        {/* <p>oho the page is {findError.status} {findError.statusText}</p> */}
       <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
       <img src="" alt="" />
         <p className='text-9xl font-bold text-amber-400'>404</p>
    <p>The page that you're looking for is not available, please back to home page</p>
    <p><Link className='px-4 py-2 mt-4 inline-block text-black bg-amber-400 rounded-xl' to="/"><i className="fa-solid fa-house"></i> Back to Home</Link></p>
       </div>
    </div>
    </div>
  )
}
