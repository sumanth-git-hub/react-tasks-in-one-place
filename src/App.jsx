import { Suspense, useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import Counter from "./components/Counter";
import { Outlet, useLocation } from "react-router-dom";
import React from "react";
import { ThemeContext, ThemeProvider } from "./Context/ThemeContext";
import FallbackComponent from "./components/FallbackComponent";
import CustomBreadCrumb from "./components/CustomBreadCrumb";
// import { ThemeContext } from './Context/ThemeContext'

function App() {
  const [openModal, isOpenModal] = useState(null);
  const [query, setQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  // const [darkMode, isDarkMode] = useState(JSON.parse(localStorage.getItem("DarkMode")))
  // console.log(ThemeContext)

  //breadCrumb
    // const FindPathName = useLocation()
    // console.log(FindPathName.pathname)
    // const findPageName= FindPathName?.pathname?.split("/").filter(Boolean).pop()?.split("-")
    // const fixCasing = findPageName.map((word) => word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase())
    // const pageName = fixCasing.join(" ").toLocaleString();
    

  return (
    <ThemeProvider>
      {/* <ThemeContext.Provider value={[darkMode, isDarkMode]}> */}
      <HeaderComponent
        openModal={openModal}
        isOpenModal={isOpenModal}
        //  theme={[darkMode, isDarkMode]}
      />
   
      <Suspense fallback={<FallbackComponent></FallbackComponent>}>
        <Outlet
          context={{
            openModal,
            isOpenModal,
            query,
            setQuery,
            isLoaded,
            setIsLoaded,
          }}
          // context={{openModal, isOpenModal, darkMode, isDarkMode}}
        />
      </Suspense>
      {/* </ThemeContext.Provider> */}
    </ThemeProvider>
  );
}

export default App;
