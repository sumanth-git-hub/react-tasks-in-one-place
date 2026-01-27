import React, { useContext, useEffect, useState } from 'react'
import Counter from './Counter'
import ImageComponent from './ImageComponent'
import lazyLoadImage from '../assets/react-lazy-load-image.png'
// import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext'
import { useTheme } from '../hooks/UseTheme'
import useWindowSize from '../hooks/useWindowSize'
import Accordion from './Accordion'
import ToggleAnswer from './ToggleAnswer'
import { Link } from 'react-router-dom'
import AutoType from './AutoType'
import ToastNotifications from './ToastNotifications'
// import lazyLoadImage from '../assets/men-and-love.png'

export default function () {
  // const {darkMode} = useOutletContext()
  // const [darkMode] = useContext(ThemeContext)
  const [darkMode] = useTheme()
//   const [screenSize, setScreenSize] = useState({width: window.innerWidth, height: window.innerHeight})
// useEffect(() => {
//     window.addEventListener('resize', () => {
//     setScreenSize({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     })
//   })
// },[0])

const [screenSize] = useWindowSize()

  return (
    <section className={`w-full ${darkMode? "darkModeActive": ""} relative`}>
      <div className={`w-full max-w-6xl min-h-screen p-4 m-auto`}>
    <AutoType fixedTextContent={"Welcome! This single-page website is built using"} wordsArray={["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js"]} />
      <ImageComponent source={lazyLoadImage} meaning={"Lazy Loading Effect Image"}/>
        {/* <Counter>
            Counter Function
             </Counter> */}
             <h3 className='text-sm my-4 fixed bottom-0 right-4 border border-amber-500 px-4 py-2 rounded-xl'>Window Size: {screenSize.width} X {screenSize.height}</h3>
             <ToastNotifications />
             <p className='mb-5'>Play <Link title='Click Here to Play TicTacToe Game' className='text-amber-500 hover:underline' to="/tic-tac-toe">TicTacToe Game</Link> here</p>
             <p className='mb-5'>Start the <Link title='Click here to Start the React Quiz' className='text-amber-500 hover:underline' to="/react-quiz">React Quiz</Link> here</p>
             <p className='mb-5'>Check How <Link title='Click here to Understand how Pagination works' className='text-amber-500 hover:underline' to={"/pagination"}>Pagination</Link> works in React</p>
             <p className='mb-5'>Check How the <Link className='text-amber-500 hover:underline' title='Click here to check how stopwatch, countdown timer and calender works in react' to="/timer-section">Countdown Timer</Link> and Calender works in React</p>
            <p className='mb-5'>Check <Link className='text-amber-500 hover:underline'  to="/character-counter">Online Character and Word Counter</Link>&nbsp;online in React</p>
            <p className='mb-5'>Check <Link className='text-amber-500 hover:underline'  to="/stock-free-images">Stock Free Images</Link>&nbsp;by Using Unsplash API in React</p>
            <p className='mb-5'>Check List of <Link className='text-amber-500 hover:underline' to="./to-do-list">Tasks to Do</Link> Daily (CRUD) with Drag and Drop Feature</p>
             <Accordion faqHeading={"FAQs on React.js"}>
              <ToggleAnswer passQuestion={"What is useState in React?"} passAnswer={"useState is a react hook that let's you add the state functional component."}/>
              <ToggleAnswer passQuestion={"What is useEffect in React?"} passAnswer={"useEffect is a side effect Hook that lets you run code after rendering — like: Fetching data, Updating the DOM, Setting timers, Syncing with external systems (like APIs)"}/>
              <ToggleAnswer passQuestion={'What is Elements in React?'} passAnswer={'A React element is a plain JavaScript object that describes what you want to appear in the UI. It is the smallest unit in React, created using JSX or React.createElement(), and is used by React to render the actual DOM.'}/>
              <ToggleAnswer passQuestion={`What is React Component?`} passAnswer={`A React component is a reusable piece of UI written in JavaScript (or TypeScript) that returns HTML using JSX. It can be either a function or a class, and it helps build complex interfaces by breaking them into smaller, manageable parts.`} />
              </Accordion>
    </div>
    </section>
  )
}
