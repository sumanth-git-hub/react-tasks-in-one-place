import React, { useState } from "react";
import { useTheme } from "../hooks/UseTheme";
import { quizData } from "./QuizQuestionsSet";
import CustomBreadCrumb from "./CustomBreadCrumb";
import { useLocation } from "react-router-dom";

const QuizFunction = () => {
  const [darkMode] = useTheme();
  const [questionsData] = useState(quizData);
  const [idCount, setIdCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  // console.log("progressWidth",progressWidth);

  function handleAnswer(option) {
    // console.log(option);
    setSelectedAnswer(option);
  }

  // console.log(score/questionsData.length * 100)

  return (
    <section className={`w-full ${darkMode ? "darkModeActive" : ""}`}>
      <div className={`w-full max-w-6xl min-h-[calc(100vh-100px)] p-4 m-auto`}>
        <div
          className={`quizSection w-full max-w-3xl rounded-xl mx-auto mt-10 ${
            darkMode ? "darkShadow" : "applyShadow"
          }`}
        >
          <h2 className="text-3xl font-semibold text-center mb-6 pt-6 text-amber-500">
            <span className="text-sky-300">React</span> Quiz
          </h2>
          <hr className={`text-amber-500`} />
          {idCount === questionsData.length ? (
            <div className="p-10 text-center">
              <h2 className="text-3xl font-bold text-amber-500 mb-6">
                🎉 Congratulations!
              </h2>
              
              {
              //horizontal bar
              /* <div className="progressBarContainer w-full max-w-2xl mx-auto h-8 my-2  bg-gray-400 rounded-2xl overflow-hidden">
                <div
                  className={`progressBar h-full flex items-center justify-center text-black`}
                  style={{
                    "--fill-progress-bar": `${progressWidth}%`,
                    backgroundColor: "#73D4FF",
                  }}
                >
                  <span className="align-middle">{progressWidth}%</span>
                </div>
              </div> */

              //below code is circular bar
              }
              <div className="circle-section" style={{
                backgroundImage : `conic-gradient(#74D4FF ${progressWidth * 3.6}deg, rgba(166, 149, 149, 0.379) 0deg)`,
                marginInline: `auto`
              }}>
                    <span className="percentageValue">{progressWidth}%</span>
                </div>
              <p className="mt-4 text-lg">
                You have Scored {score} out of {questionsData.length}
              </p>
              <button
                onClick={() => {
                  setIdCount(0);
                  setScore(0);
                  setProgressWidth(0);
                }}
                className="block bg-amber-500 px-20 py-2 mt-4 mx-auto rounded-xl text-black font-bold cursor-pointer"
              >
                Re Start&nbsp; <i className="fa-solid fa-rotate-right"></i>
              </button>
            </div>
          ) : (
            <div className="questionsBlock p-6">
              <h3 className="text-xl font-semibold mb-4">
                <span>{questionsData[idCount].id}.&nbsp;</span>
                {questionsData[idCount].question}
              </h3>
              <ul>
                {questionsData[idCount].options.map((option, index) => {
                  const correctAnswer = questionsData[idCount].answer;
                  let optionClass = "";

                  if (selectedAnswer) {
                    if (option === correctAnswer) {
                      optionClass = "text-green-500 font-bold";
                    } else if (
                      option === selectedAnswer &&
                      option !== correctAnswer
                    ) {
                      optionClass = "text-red-500 font-bold";
                    }
                  }
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        if (!selectedAnswer) {
                          handleAnswer(option);

                          if (option === correctAnswer) {
                            setScore(score + 1);
                            setProgressWidth(score/questionsData.length * 100 + 20);
                          }
                          // console.log(score);
                        }
                      }}
                      className={`${
                        darkMode ? "darkShadow" : "applyShadow"
                      } pl-6 p-2 rounded-xl mb-4 cursor-pointer wrap-break-word hover:bg-sky-300 hover:text-black transition duration-500 ease-in-out ${optionClass} ${
                        selectedAnswer ? "pointer-events-none" : ""
                      }`}
                    >
                      {option}
                    </li>
                  );
                })}
              </ul>

              <div className="flex items-center justify-between">
                <p>
                  {questionsData[idCount].id} out of {questionsData.length}{" "}
                  <span className="text-sky-300">Questions</span>
                </p>
                <button
                  onClick={() => {
                    setIdCount(idCount + 1);
                    setSelectedAnswer("");
                  }}
                  className={`block px-20 py-2 rounded-xl text-black font-bold cursor-pointer select-none ${
                    !selectedAnswer
                      ? "pointer-events-none bg-gray-400"
                      : "bg-amber-500"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizFunction;
