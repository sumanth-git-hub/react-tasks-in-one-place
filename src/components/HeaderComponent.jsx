import React, { useContext } from "react";
import reactLogo from "../assets/react.svg";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Modal from "./Modal";
import { ThemeContext } from "../Context/ThemeContext";
import SignUpForm from "./SignUpForm";
import CustomBreadCrumb from "./CustomBreadCrumb";

export default function HeaderComponent({ openModal, isOpenModal, theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [darkMode, isDarkMode] = theme
  const [darkMode, isDarkMode] = useContext(ThemeContext)
      const [signAction, setSignAction] = useState("Sign Up");
      const [isBarIcon, setIsBarIcon] = useState(false)

       const FindPathName = useLocation()
    // console.log(FindPathName.pathname)

    let pageName = ""

    if(FindPathName.pathname === "/"){
      // console.log("Say Yes")
      pageName = "Home"
      // console.log(pageName)
    }
    else {
          const findPageName= FindPathName?.pathname?.split("/").filter(Boolean).pop()?.split("-")
    const fixCasing = findPageName.map((word) => word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase())
     pageName = fixCasing.join(" ").toLocaleString();
    }


  return (
    <>
      <header className={`fixed top-0 w-full z-10 backdrop-blur-sm shadow ${darkMode ? "darkModeActive": ''}`} >
        <nav>
          {/* Mobile Header */}
          <div className="w-full p-4 m-auto md:hidden">
            <div className="flex gap-8 items-center ">
              <i 
              onClick={() => {
                setIsBarIcon(!isBarIcon)
              }}
            className={`fa-solid text-3xl cursor-pointer inline-block w-10 ${isBarIcon ? "fa-xmark" : "fa-bars"}`}></i>
            <Link to="/">
              <img className="image-size" src={reactLogo} alt={reactLogo} />
            </Link>
            </div>
            <i onClick={() => {
                  isDarkMode(!darkMode)
                  localStorage.setItem("DarkMode", !darkMode)
              }} className={`fa-solid  text-xl cursor-pointer absolute top-5 right-2 ${darkMode ? 'fa-sun': 'fa-moon'}`}></i>
            <div className={`w-1/2 absolute top-15 left-0 pl-8 py-4 rounded-b-xl z-20 ${darkMode ? "bg-black" : "bg-white"} ${isBarIcon ? "block": "hidden"}`}>
              <ul onClick={() => {
                setIsBarIcon(false)
              }}>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-500 underline decoration-blue-500 decoration-dotted"
                      : "initial"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-500 underline decoration-blue-500 decoration-dotted"
                      : "initial"
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-500 underline decoration-blue-500 decoration-dotted"
                      : "initial"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-500 underline decoration-blue-500 decoration-dotted"
                      : "initial"
                  }
                  to="/countries"
                >
                  Countries List
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-500 underline decoration-blue-500 decoration-dotted"
                      : "initial"
                  }
                  to="/expense-tracker"
                >
                  E Tracker
                </NavLink>
              </li> */}
              <li>
                <button onClick={() => isOpenModal("HeaderComponent")}>
                  Sing-In
                </button>
                <Modal
                  openModal={openModal === "HeaderComponent"}
                  isOpenModal={() => isOpenModal(null)}
                  passHeading={signAction}
                  bottomLine={`Thanks for Choosing us!`}
                  Children={
                      <SignUpForm signAction={signAction} setSignAction={setSignAction} />
                  }
                />
              </li>
            </ul>
            </div>
          </div>


          {/* Desktop Header */}
          <div className="w-full max-w-6xl hidden items-center p-4 m-auto md:flex">
            <Link to="/">
              <img className="image-size invisible md:visible" src={reactLogo} alt={reactLogo} />
            </Link>
            <ul className="flex justify-end w-full gap-4 invisible md:visible">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-500 underline decoration-blue-500 decoration-dotted"
                      : "initial"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-500 underline decoration-blue-500 decoration-dotted"
                      : "initial"
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-500 underline decoration-blue-500 decoration-dotted"
                      : "initial"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-500 underline decoration-blue-500 decoration-dotted"
                      : "initial"
                  }
                  to="/countries"
                >
                  Countries List
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-500 underline decoration-blue-500 decoration-dotted"
                      : "initial"
                  }
                  to="/expense-tracker"
                >
                  E Tracker
                </NavLink>
              </li> */}
              <li>
                <button className="cursor-pointer" onClick={() => isOpenModal("HeaderComponent")}>
                  Sing-In
                </button>
                <Modal
                  openModal={openModal === "HeaderComponent"}
                  isOpenModal={() => isOpenModal(null)}
                  passHeading={signAction}
                  bottomLine={`Thank You!`}
                  Children={
                      <SignUpForm signAction={signAction} setSignAction={setSignAction} />
                  }
                />
              </li>
              <li><i onClick={() => {
                  isDarkMode(!darkMode)
                  localStorage.setItem("DarkMode", !darkMode)
              }} className={`fa-solid  text-xl cursor-pointer ${darkMode ? 'fa-sun': 'fa-moon'}`}></i></li>
            </ul>
          </div>
        </nav>
      </header>
           <CustomBreadCrumb
        item={[
          { name: "Home", route: "/" },
          { name: `${pageName}`, route: `${FindPathName.pathname}` },
        ]}
      />
    </>
  );
}
