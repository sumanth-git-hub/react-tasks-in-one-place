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
import { AuthProvider } from "./Context/AuthContext";
// import { ThemeContext } from './Context/ThemeContext'
import {Toaster} from 'react-hot-toast'

function App() {
  const [openModal, isOpenModal] = useState(null);
  const [query, setQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
    
  return (
    <ThemeProvider>
      <AuthProvider >
        <Toaster />
      <HeaderComponent
        openModal={openModal}
        isOpenModal={isOpenModal}
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
        />
      </Suspense>
      {/* </ThemeContext.Provider> */}
      </AuthProvider>
      
    </ThemeProvider>
  );
}

export default App;
