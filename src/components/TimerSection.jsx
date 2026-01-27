import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../hooks/UseTheme";

const TimerSection = () => {
  const [darkMode] = useTheme();
  const [timer, setTimer] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const intervalClear = useRef(null);
  const inputElement = useRef(null);
  const [addRotate, setAddRotate] = useState(false);

  const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
  const seconds = String(Math.floor(timer % 60)).padStart(2, "0");

  const startTimer = () => {
    setIsStart(true);
    setIsPause(false);
    setAddRotate(false);
  };
  const pauseTimer = () => {
    setIsPause(!isPause);
    setAddRotate(false);
  };
  const resetTimer = () => {
    clearInterval(intervalClear.current);
    setTimer(0);
    setIsStart(false);
    setIsPause(false);
    inputElement.current.value = "";
    setAddRotate(true);
  };
  useEffect(() => {
    if (isStart && !isPause && timer > 0) {
      intervalClear.current = setInterval(() => {
        setTimer((prevStart) => prevStart - 1);
      }, 1000);
    } else if (timer === 0 && isStart) {
      clearInterval(intervalClear.current);
      setIsStart(false);
      alert("Time is Up");
      inputElement.current.value = "";
    }
    return () => clearInterval(intervalClear.current);
  }, [timer, isStart, isPause]);

  const [stopTime, setStopTime] = useState(0);
  const [startWatch, setStartWatch] = useState(false);
  const [pauseWatch, setPauseWatch] = useState(false);
  const resetIntervalElement = useRef(null);
  const resetIcon = useRef(null);
  const [isRotate, setIsRotate] = useState(false);

  const setMinutes = String(Math.floor(stopTime / 60)).padStart(2, "0");
  const setSeconds = String(Math.floor(stopTime % 60)).padStart(2, "0");

  const startWatchTimer = () => {
    console.log(startWatch);
    setStartWatch(true);
    setPauseWatch(false);
    setIsRotate(false);
  };

  const pauseWatchTimer = () => {
    console.log(pauseWatch);
    setPauseWatch(!pauseWatch);
  };

  const resetWatchTimer = () => {
    clearInterval(resetIntervalElement.current);
    setStopTime(0);
    setStartWatch(false);
    setPauseWatch(false);
    console.log(resetIcon.current);
    setIsRotate(true);
    // resetIcon.current.style.transform = "rotate(360deg) transition 2s ease"
  };
  useEffect(() => {
    if (startWatch && !pauseWatch) {
      resetIntervalElement.current = setInterval(() => {
        setStopTime(stopTime + 1);
        console.log(stopTime);
      }, 1000);
    } else if (resetWatchTimer) {
      clearInterval(resetIntervalElement.current);
    }
    return () => clearInterval(resetIntervalElement.current);
  }, [stopTime, startWatch, pauseWatch]);

  

  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let timeAndDate = new Date();
  const [isClockSeconds, setIsClockSeconds] = useState(0);
  const [isHours, setIsHours] = useState(0)

  useEffect(() => {
    setInterval(() => {
    timeAndDate = new Date();
      setIsClockSeconds(timeAndDate.getSeconds())
      setIsHours(timeAndDate.getHours())
    }, 1000);
  },[])

  if(isHours > 12){
        setIsHours(timeAndDate.getHours() - 12)
      }

  return (
    <section className={`w-full ${darkMode ? "darkModeActive" : ""}`}>
      <div className={`w-full max-w-6xl p-4 m-auto`}>
        <div className={`calenderSection p-7 h-fit rounded-lg mb-4 ${
            darkMode ? "darkShadow " : "applyShadow"} `}>
          <h2 className="text-3xl font-semibold text-center mb-8">
            Clock and Calender in&nbsp;
            <span className="text-sky-300">React</span>
          </h2>
          <div className="flex justify-center gap-6 items-baseline-last">
            <div className="weekAndYear bg-red-900 p-4 rounded">
              <p className="text-6xl text-center">
                {timeAndDate.getDate() < 10
                  ? "0" + timeAndDate.getDate()
                  : timeAndDate.getDate()}
              </p>
              <div className="self-baseline-last">
              <span className="text-2xl text-amber-500">{monthsArray[timeAndDate.getMonth()]}</span> {" "}
              <span className="text-2xl text-sky-300">{timeAndDate.getFullYear()}</span>
              </div>
            </div>
            <div className={`digitalClock text-4xl flex`}>
              <span className="w-14 inline-block mx-1 text-center">{isHours < 10 ? "0" + isHours : isHours}</span>:
              <span className="w-14 inline-block mx-1 text-center">{timeAndDate.getMinutes() < 10 ? "0" + timeAndDate.getMinutes(): timeAndDate.getMinutes()}</span>:
              <span className="w-14 inline-block mx-1 text-center">{isClockSeconds < 10 ? "0"+ isClockSeconds : isClockSeconds}</span>
              <span className="w-14 inline-block mx-1 text-center">{timeAndDate.getHours() > 12 ? "PM" : "AM"}</span>
            </div>
          </div>
        </div>
        <div
          className={`countDownTimerSection p-8 h-fit rounded-lg mb-4 ${
            darkMode ? "darkShadow " : "applyShadow"
          }`}
        >
          <h2 className="text-3xl font-semibold text-center mb-8">
            Countdown Timer in <span className="text-sky-300">React</span>
          </h2>
          <div className="countDownTimer w-full max-w-2xl mx-auto">
            <input
              ref={inputElement}
              onChange={(e) => {
                setTimer(parseInt(e.target.value * 60));
                console.log(timer);
              }}
              type="number"
              placeholder="Enter the Minutes"
              className={` w-1/2 px-4 py-2 rounded block outline-0 text-center bg-gray-300 mx-auto text-black ${
                darkMode ? "darkShadow " : "applyShadow"
              }}`}
            />
            <p className="text-3xl my-4 font-bold text-center">
              <span className="text-amber-500">{minutes}</span>
              {" : "}
              <span className="text-sky-300">{seconds}</span>
            </p>
            <div className="buttonsSection mt-4 flex justify-center">
              <button
                onClick={() => {
                  startTimer();
                }}
                disabled={isStart}
                className="bg-amber-500 px-4 py-2 rounded-xl text-black mx-2 cursor-pointer"
              >
                <i className="fa-solid fa-play" title="Start"></i>
              </button>
              <button
                onClick={() => {
                  pauseTimer();
                }}
                disabled={!isStart}
                className="bg-amber-500 px-4 py-2 rounded-xl text-black mx-2 cursor-pointer"
              >
                <i
                  className={`fa-solid  ${
                    isPause ? "fa-circle-play" : "fa-circle-pause"
                  }`}
                  title={`${isPause ? "Resume" : "Pause"}`}
                ></i>
              </button>
              <button
                onClick={() => {
                  resetTimer();
                }}
                className="bg-amber-500 px-4 py-2 rounded-xl text-black mx-2 cursor-pointer"
              >
                <i
                  className={`fa-solid fa-arrow-rotate-right ${
                    addRotate ? "rotate360Deg" : ""
                  }`}
                  title="Reset"
                ></i>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`stopWatchTimerSection p-8 h-fit rounded-lg ${
            darkMode ? "darkShadow " : "applyShadow"
          }`}
        >
          <h2 className="text-3xl font-semibold text-center mb-8">
            Stop Watch in <span className="text-sky-300">React</span>
          </h2>
          <p className="text-3xl mb-4 font-bold text-center">
            <span className="text-amber-500">{setMinutes}</span>
            {" : "}
            <span className="text-sky-300">{setSeconds}</span>
          </p>

          <div className="buttonsSection mt-4 flex justify-center">
            <button
              onClick={() => {
                startWatchTimer();
              }}
              disabled={startWatch}
              className="bg-amber-500 px-4 py-2 rounded-xl text-black mx-2 cursor-pointer"
            >
              <i className="fa-solid fa-play" title="Start"></i>
            </button>
            <button
              onClick={() => {
                pauseWatchTimer();
              }}
              disabled={!startWatch}
              className="bg-amber-500 px-4 py-2 rounded-xl text-black mx-2 cursor-pointer"
            >
              <i
                className={`fa-solid  ${
                  pauseWatch ? "fa-circle-play" : "fa-circle-pause"
                }`}
                title={`${pauseWatch ? "Resume" : "Pause"}`}
              ></i>
            </button>
            <button
              onClick={() => {
                resetWatchTimer();
              }}
              className="bg-amber-500 px-4 py-2 rounded-xl text-black mx-2 cursor-pointer"
            >
              <i
                className={`fa-solid fa-arrow-rotate-right ${
                  isRotate ? "rotate360Deg" : ""
                }`}
                title="Reset"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimerSection;
