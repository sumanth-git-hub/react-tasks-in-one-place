import React, { useContext, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext'
import useWindowSize from '../hooks/useWindowSize'
import { useTheme } from '../hooks/UseTheme'
// import {todos} from "../components/Data"

export default function AboutPage() {
  const [data, setData] = useState([])
  // const {darkMode} = useOutletContext()
  // const [darkMode] = useContext(ThemeContext)
  const [darkMode] = useTheme()
  // const [screenSize] = useWindowSize()
  return (
<section className={`w-full ${darkMode? "darkModeActive": ""}`}>
      <div className={`w-full max-w-6xl p-4 m-auto min-h-[calc(100vh-100px)]`}>
      <p>About us</p>
      <p>I'am Sumanth having 4years of Experience in SEO industry and Passionate to work in Frontend web development</p>
      <h3 className='my-2'>Understand lazy load on data import by clicking button</h3>
      <button className='bg-amber-500 px-4 py-2 rounded-xl bold cursor-pointer text-black' onClick={(e) => {
        import('./Data')
        .then((module) => setData(module.todos))
        .catch((err) => console.error("Failed to load data",err))
      }}>Check Data</button>
      <ul>
        {
          data.map((todo,index) => <li key={index}>{index + 1} {todo.title}</li>)
        }
      </ul>
    </div>
</section>
  )
}
