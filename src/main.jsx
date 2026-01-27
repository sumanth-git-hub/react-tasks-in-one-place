import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import HomePage from "./components/HomePage.jsx";
// import AboutPage from './components/AboutPage.jsx';
// import ContactPage from "./components/ContactPage.jsx";
import { lazy } from "react";
import FallbackComponent from "./components/FallbackComponent.jsx";
import Countries from "./components/Countries.jsx";
import CountryPage from "./components/CountryPage.jsx";
import ExpenseTracker from "./components/ExpenseTracker.jsx";
import QuizFunction from "./components/QuizFunction.jsx";
import CharacterCounter from "./components/CharacterCounter.jsx";
import ToDoList from "./components/ToDoList.jsx";
// import StockFreeImages from "./components/StockFreeImages.jsx";
// import TimerSection from "./components/TimerSection.jsx";
// import Pagination from "./components/Pagination.jsx";
// import TicTacToe from "./components/TicTacToe.jsx";

// const TicTacToe = lazy(() => import('./components/TicTacToe.jsx'))
const StockFreeImages = lazy(() => import("./components/StockFreeImages.jsx"))
const TimerSection = lazy(() => import("./components/TimerSection.jsx"))
const Pagination = lazy(() => import("./components/Pagination.jsx"))
const TicTacToe = lazy(() => import("./components/TicTacToe.jsx"));
const AboutPage = lazy(() => waitForResponse(1000).then(() => import('./components/AboutPage.jsx')))
const ContactPage = lazy(() => waitForResponse(1000).then(() => import('./components/ContactPage.jsx')))
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<FallbackComponent/>}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: '/countries',
        element: <Countries />
      },
      {
        path: '/:country',
        element: <CountryPage />
      },
      {
        path: '/expense-tracker',
        element: <ExpenseTracker />
      },
      {
        path: '/tic-tac-toe',
        element: <TicTacToe />
      },
      {
        path: '/react-quiz',
        element: <QuizFunction />
      },
      {
        path: '/pagination',
        element: <Pagination />
      },
      {
        path: 'timer-section',
        element: <TimerSection />
      },
      {
        path: '/character-counter',
        element: <CharacterCounter />
      },
      {
        path: '/stock-free-images',
        element: <StockFreeImages />
      },
      {
        path: '/to-do-list',
        element: <ToDoList />
      }
    ],
  },
]);

const waitForResponse = (passTime) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, passTime)
  })
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
