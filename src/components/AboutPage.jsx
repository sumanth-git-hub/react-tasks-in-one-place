import React, { useContext, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import useWindowSize from "../hooks/useWindowSize";
import { useTheme } from "../hooks/useTheme";
import TwoSection from "./reuseComponents/TwoSection";
// import {todos} from "../components/Data"

export default function AboutPage() {
  const [data, setData] = useState([]);
  // const {darkMode} = useOutletContext()
  // const [darkMode] = useContext(ThemeContext)
  const [darkMode] = useTheme();
  // const [screenSize] = useWindowSize()
  const getImage = `src/assets/sumanth-profile-picture.png`;

  return (
    <section className={`w-full ${darkMode ? "darkModeActive" : ""}`}>
      <div className={`w-full max-w-6xl p-4 m-auto min-h-[calc(100vh-100px)]`}>
        <TwoSection
          imageLink={getImage}
          altTag={"Sumanth S S"}
          heading={`Frontend Developer with 4 Years of Technical SEO Experience | `}
          yellowText={"JavaScript"}
          divider={` & `}
          blueText={"React"}
        >
          <div className="content-section mt-4 md:mt-0">
            <p className="mb-2">
              I’m Sumanth, a Frontend Developer with 4 years of experience in
              the SEO industry, specializing in Technical SEO. My journey into
              frontend development began through close collaboration with
              development teams while handling technical SEO projects.
            </p>
            <p className="mb-2">
              Working extensively on website optimization, performance
              improvements, structured data implementation, and CMS platforms
              like WordPress and Adobe Experience Manager (AEM), I developed a
              strong interest in how websites are built — not just how they
              rank.
            </p>
            <p className="mb-2">
              Over the past year, I have focused on building my frontend
              development skills, learning and working with{" "}
              <span className="text-[#E65100]">HTML</span> ,{" "}
              <span className="text-[#2E53E5]">CSS</span>,{" "}
              <span className="text-[#42BFF8]">Tailwind CSS</span>,{" "}
              <span className="text-[#841BFA]">Bootstrap</span>,{" "}
              <span className="text-[#F7E02C]">JavaScript</span>,{" "}
              <span className="text-[#20D9FF]">React</span>,{" "}
              <span className="text-[#F0573A]">Git</span>, and GitHub. I have
              also explored <span className="text-[#7A50BE]">Redux</span> and
              built several small projects to strengthen my understanding of
              JavaScript concepts and React architecture.
            </p>
            <p className="mb-2">
              My unique strength lies in combining SEO expertise with frontend
              development. I understand how clean code, performance
              optimization, accessibility, and structured markup directly impact
              search visibility and user experience. This allows me to build
              websites that are not only visually appealing and functional, but
              also technically optimized for search engines.
            </p>
            <p className="mb-2">
              I am currently seeking opportunities where I can contribute as a
              frontend developer while leveraging my SEO background to build
              high-performing, search-friendly web applications.
            </p>
          </div>
        </TwoSection>

        {
          //here is the code understanding of how we can add the lazy load on data that loads after the action
          //   <button className='bg-amber-500 px-4 py-2 rounded-xl bold cursor-pointer text-black' onClick={(e) => {
          //   import('./Data')
          //   .then((module) => setData(module.todos))
          //   .catch((err) => console.error("Failed to load data",err))
          // }}>Check Data</button>
          // <ul>
          //   {
          //     data.map((todo,index) => <li key={index}>{index + 1} {todo.title}</li>)
          //   }
          // </ul>
        }
      </div>
    </section>
  );
}
