import React, { useContext, useEffect, useState } from "react";
import Counter from "./Counter";
import ImageComponent from "./ImageComponent";
import lazyLoadImage from "../assets/react-lazy-load-image.png";
import heroImage from "../assets/hero-image.png";
// import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from "../Context/ThemeContext";
import { useTheme } from "../hooks/useTheme";
import useWindowSize from "../hooks/useWindowSize";
import Accordion from "./Accordion";
import ToggleAnswer from "./ToggleAnswer";
import { Link } from "react-router-dom";
import AutoType from "./AutoType";
import ToastNotifications from "./ToastNotifications";
import OtpInputComponent from "./otpElements/OtpInputComponent";
import RatingComponent from "./ratingElement/RatingComponent";
import ComponentsData from "./reuseComponents/ComponentsData";
import { CardsComponent } from "./reuseComponents/CardsComponent";
// import lazyLoadImage from '../assets/men-and-love.png'

export default function () {
  // const {darkMode} = useOutletContext()
  // const [darkMode] = useContext(ThemeContext)
  const [darkMode] = useTheme();
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

  const [screenSize] = useWindowSize();

  return (
    <section className={`w-full ${darkMode ? "darkModeActive" : ""} relative`}>
      <div className={`w-full max-w-6xl min-h-screen p-4 m-auto`}>
        <AutoType
          fixedTextContent={"Welcome! This single-page website is built using"}
          wordsArray={["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js"]}
        />
        <ImageComponent
          source={heroImage}
          meaning={"Lazy Loading Effect Image"}
        />
        <Accordion>
          <ToggleAnswer
            passQuestion={"Introduction"}
            passAnswer={`Hello, I’m Sumanth S S — a Frontend Developer specializing in React and modern JavaScript.
I build scalable and high-performance web applications with a strong focus on clean architecture, SEO optimization, and user experience.`}
          >
            {
              <p className="text-sm mt-2">
                <a
                  className="py-2 px-4 rounded-xl font-medium bg-amber-400 cursor-pointer text-black  inline-block text-center"
                  href="/about"
                >
                  About Me
                </a>
                &nbsp;
                <a
                  className="py-2 px-4 rounded-xl font-medium bg-amber-400 cursor-pointer text-black inline-block text-center"
                  href="/contact"
                >
                  Get In Touch
                </a>
              </p>
            }
          </ToggleAnswer>
        </Accordion>
        <h2 className="my-2 text-center text-2xl font-bold">
          Featured Projects using{" "}
          <span className="text-[#F7E02C]">JavaScript</span>
          <span>&nbsp;&&nbsp;</span>
          <span className="text-sky-400">React</span>
        </h2>
        <section className="project-card-container ">
          {
            // ComponentsData.slice(0,6)
            ComponentsData.filter(
              (showFeatured) => showFeatured.isFeatured,
            ).map((item, index) => {
              return (
                <div key={item.componentId} className="w-1/4">
                  <CardsComponent
                    projectName={item.componentName}
                    productDescription={item.builtWith}
                    urlSlug={item.componentUrl}
                    lazyLoadImage={item.componentImage}
                    altTag={item.componentName}
                    gitHubRepo={item.gitHubRepo}
                  />
                </div>
              );
            })
          }
        </section>
        <a
          className="mx-2 my-4 py-2 px-4 rounded-xl font-medium bg-amber-400 cursor-pointer text-black inline-block text-center"
          href="/list-of-projects"
        >
          View more Projects&nbsp;
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <p className="text-sm my-4 fixed bottom-0 z-10 right-4 border border-amber-500 p-2 rounded-xl">
          Window Size: {screenSize.width} X {screenSize.height}
        </p>
        <RatingComponent />
      </div>
    </section>
  );
}
