import React, { useRef, useState } from "react";
import { useTheme } from "../hooks/UseTheme";

let storeElement = ["","","","","","","","",""]

function TicTacToe() {
  const [darkMode] = useTheme();
    // console.log(storeElement)

    const [count, setCount] = useState(0)
    const [lock, setLock] = useState(false)
    const winnerLine = useRef(null)
    const rotateReload = useRef(null)
    let box0 = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);

    const boxArray = [box0,box1,box2,box3, box4,box5,box6,box7,box8]

    const toggleFunction = (element,number) => {
        // console.log(number)
            if(lock) {
                return 0;
            }
            if(count %2=== 0){
                element.target.innerHTML = `<i class="fa-solid fa-x xIcon"></i>`;
                storeElement[number] = "X"
            }
            else {
                element.target.innerHTML = `<i class="fa-regular fa-circle circleIcon"></i>`;
                storeElement[number] = "O"
            }
            setCount(count + 1)
            checkWin()
    }

    function checkWin() {
          if(storeElement[0] === storeElement[1] && storeElement[1] === storeElement[2] && storeElement[2] !== ""){
              // console.log("You Won")
              won(storeElement[2])
          }
          else if (storeElement[3] === storeElement[4] && storeElement[4] === storeElement[5] && storeElement[5] !== ""){
            won(storeElement[5])
          }
          else if (storeElement[6] === storeElement[7] && storeElement[7] === storeElement[8] && storeElement[8] !== ""){
            won(storeElement[8])
          }
          else if (storeElement[0] === storeElement[3] && storeElement[3] === storeElement[6] && storeElement[6] !== ""){
            won(storeElement[6])
          }
          else if (storeElement[1] === storeElement[4] && storeElement[4] === storeElement[7] && storeElement[7] !== ""){
            won(storeElement[7])
          }
          else if (storeElement[2] === storeElement[5] && storeElement[5] === storeElement[8] && storeElement[8] !== ""){
            won(storeElement[8])
          }
          else if (storeElement[0] === storeElement[4] && storeElement[4] === storeElement[8] && storeElement[8] !== ""){
            won(storeElement[8])
          }
          else if (storeElement[2] === storeElement[4] && storeElement[4] === storeElement[6] && storeElement[6] !== ""){
            won(storeElement[6])
          }
    }

    const won = (winner) => {
      setLock(true)
      if(winner === "X"){
        winnerLine.current.innerHTML = `Congratulations <i class="fa-solid fa-x text-sky-300"></i> Won`
      }
      else {
        winnerLine.current.innerHTML = `Congratulations <i class="fa-regular fa-circle text-amber-500"></i> Won`
      }
    }

    function resetFun() {
      // console.log("reset")
      setLock(false)
      storeElement = ["","","","","","","","",""]
      boxArray.map((box) => box.current.innerHTML = "")
      winnerLine.current.innerText = "Well Played, Play Again!"
      rotateReload.current.style.transform = "rotate(0deg)";
      rotateReload.current.style.transition = "none";
    // Force reflow to restart animation
    void rotateReload.current.offsetWidth;
    // Apply the 360° rotation with animation
    rotateReload.current.style.transform = "rotate(360deg)";
    rotateReload.current.style.transition = "transform 0.5s ease-in-out";
    }

  return (
    <section className={`w-full ${darkMode ? "darkModeActive" : ""}`}>
      <div className={`w-full max-w-6xl min-h-[calc(100vh-100px)] p-4 m-auto`}>
        <div className="ticTacToe">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Tic Tac Toe <span className="text-amber-500">Game</span> in <span className="text-sky-300">React</span>
          </h1>
          <h2 className="text-center font-semi-bold text-lg" ref={winnerLine}></h2>
          <div className="ticTacBoard flex justify-center">
                <div className="row0">
                    <div ref={box0} className="boxes" onClick={(e) => toggleFunction(e, 0)}></div>
                    <div ref={box1} className="boxes" onClick={(e) => toggleFunction(e, 1)}></div>
                    <div  ref={box2}className="boxes" onClick={(e) => toggleFunction(e, 2)}></div>
                </div>
                <div className="row1">
                    <div ref={box3} className="boxes" onClick={(e) => toggleFunction(e, 3)}></div>
                    <div  ref={box4}className="boxes" onClick={(e) => toggleFunction(e, 4)}></div>
                    <div ref={box5} className="boxes" onClick={(e) => toggleFunction(e, 5)}></div>
                </div>
                <div className="row2">
                    <div ref={box6} className="boxes" onClick={(e) => toggleFunction(e, 6)}></div>
                    <div ref={box7} className="boxes" onClick={(e) => toggleFunction(e, 7)}></div>
                    <div  ref={box8}className="boxes" onClick={(e) => toggleFunction(e, 8)}></div>
                </div>
          </div>
          <button className="block my-4 mx-auto bg-amber-500 px-20 py-2 rounded-2xl text-black font-semibold cursor-pointer" onClick={resetFun}>Restart <i className="fa-solid fa-rotate-right font-semibold rotateIcon" ref={rotateReload}></i></button>
        </div>
      </div>
    </section>
  );
}

export default TicTacToe;
