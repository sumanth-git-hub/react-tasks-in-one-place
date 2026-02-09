import React, { useContext, useEffect, useState } from 'react'
import Counter from './Counter'
import ImageComponent from './ImageComponent'
import lazyLoadImage from '../assets/react-lazy-load-image.png'
import heroImage from '../assets/hero-image.png'
// import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext'
import { useTheme } from '../hooks/UseTheme'
import useWindowSize from '../hooks/useWindowSize'
import Accordion from './Accordion'
import ToggleAnswer from './ToggleAnswer'
import { Link } from 'react-router-dom'
import AutoType from './AutoType'
import ToastNotifications from './ToastNotifications'
import OtpInputComponent from './otpElements/OtpInputComponent'
import RatingComponent from './ratingElement/RatingComponent'
import ComponentsData from './reuseComponents/ComponentsData'
import { CardsComponent } from './reuseComponents/CardsComponent'
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
// console.log(ComponentsData)

const [screenSize] = useWindowSize()

  return (
    <section className={`w-full ${darkMode? "darkModeActive": ""} relative`}>
      <div className={`w-full max-w-6xl min-h-screen p-4 m-auto`}>
    <AutoType fixedTextContent={"Welcome! This single-page website is built using"} wordsArray={["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js"]} />
      <ImageComponent source={heroImage} meaning={"Lazy Loading Effect Image"}/>
      <h2 className='my-2 text-center text-2xl font-bold'>List of Small Projects using <span className='text-[#F7E02C]'>JavaScript</span>
      <span>&nbsp;&&nbsp;</span><span className='text-sky-400'>React</span></h2>
      <section className='project-card-container '>
      {
        ComponentsData.map((item,index) => {
          return <div key={item.componentId} className='w-1/4'>
            <CardsComponent projectName = {item.componentName} urlSlug={item.componentUrl} lazyLoadImage = {item.componentImage} altTag={item.componentName} />
          </div>
        })
      }
      </section>
             <p className='text-sm my-4 fixed bottom-0 z-10 right-4 border border-amber-500 p-2 rounded-xl'>Window Size: {screenSize.width} X {screenSize.height}</p>
             {/* <p className='mb-5'>Check <Link className='text-amber-500 hover:underline' to="/countries">All of the County Details</Link> here</p>
             <p className='mb-5'>Check <Link className='text-amber-500 hover:underline' to="/expense-tracker">Expense Tracker</Link> here</p>
             <p className='mb-5'>Check <Link className='text-amber-500 hover:underline' to="/toast-notifications">Toast Notifications Function</Link> here</p>
             <p className='mb-5'>Play <Link title='Click Here to Play TicTacToe Game' className='text-amber-500 hover:underline' to="/tic-tac-toe">TicTacToe Game</Link> here</p>
             <p className='mb-5'>Start the <Link title='Click here to Start the React Quiz' className='text-amber-500 hover:underline' to="/react-quiz">React Quiz</Link> here</p>
             <p className='mb-5'>Check How <Link title='Click here to Understand how Pagination works' className='text-amber-500 hover:underline' to={"/pagination"}>Pagination</Link> works in React</p>
             <p className='mb-5'>Check How the <Link className='text-amber-500 hover:underline' title='Click here to check how stopwatch, countdown timer and calender works in react' to="/timer-section">Countdown Timer</Link> and Calender works in React</p>
            <p className='mb-5'>Check <Link className='text-amber-500 hover:underline'  to="/character-counter">Online Character and Word Counter</Link>&nbsp;online in React</p>
            <p className='mb-5'>Check <Link className='text-amber-500 hover:underline'  to="/stock-free-images">Stock Free Images</Link>&nbsp;by Using Unsplash API in React</p>
            <p className='mb-5'>Check List of <Link className='text-amber-500 hover:underline' to="./to-do-list">Tasks to Do</Link> Daily (CRUD) with Drag and Drop Feature</p>
            <p className='mb-5'>Check How <Link className='text-amber-500 hover:underline' to="./auto-complete-search">Auto Complete Search Bar</Link> Works</p>
            <p className='mb-5'>Check How <Link className='text-amber-500 hover:underline' to="./multi-step-form">Multi Step Form with Stepper</Link> Works</p>
            <p className='mb-5'>Check How <Link className='text-amber-500 hover:underline' to="./image-carousel">Images Card Carousel</Link> Works</p>
            <p className='mb-5'>Check How <Link className='text-amber-500 hover:underline' to="./infinite-scroll">Infinite Scroll</Link> Works</p> */}
             <Accordion faqHeading={"FAQs on React.js"}>
              <ToggleAnswer passQuestion={'What is React.js?'} passAnswer={'React is a JavaScript library used to build user interfaces (UIs), specifically for single-page applications.'}/>
              <ToggleAnswer passQuestion={`What is React Component?`} passAnswer={`A React component is a reusable piece of UI written in JavaScript (or TypeScript) that returns HTML using JSX. It can be either a function or a class, and it helps build complex interfaces by breaking them into smaller, manageable parts.`} />
              </Accordion>
            <RatingComponent />
    </div>
    </section>
  )
}
