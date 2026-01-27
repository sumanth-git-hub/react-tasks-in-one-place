import React, { useEffect, useRef } from "react";

const AutoType = ({fixedTextContent, wordsArray}) => {
//   const wordsArray = ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js"];
  const autoTypeElement = useRef(null);

useEffect (() => {
    let wordIndex = 0;
    let textIndex = 0;
    let timeEffect;
    let isErase = false;


    const typeEffect = () => {

        let currentWord = wordsArray[wordIndex]
        let currentText = currentWord.substring(0, textIndex)
        autoTypeElement.current.textContent = currentText;

        if(!isErase && textIndex < currentWord.length){
            textIndex++;
            timeEffect = setTimeout(typeEffect, 150)
        } else if(isErase && textIndex > 0){
            textIndex--;
            timeEffect = setTimeout(typeEffect, 80)
        }

        else {
            if(!isErase){
                isErase = true;
                timeEffect = setTimeout(typeEffect, 1000)
            }
            else {
                isErase = false
                // wordIndex++;
                wordIndex = (wordIndex + 1)%wordsArray.length
                 timeEffect = setTimeout(typeEffect, 500)
            }
        }

        if(wordIndex === 0){
            autoTypeElement.current.style.color = "#E44D27"
        }
        else if (wordIndex === 1 || wordIndex === 3){
            autoTypeElement.current.style.color = "#00BCFF"
        }
        else if (wordIndex === 2){
            autoTypeElement.current.style.color = "yellow"
        }
        else if (wordIndex === 4) {
            autoTypeElement.current.style.color = "#00D8FF"
        }

    }
    typeEffect()
    return () => clearTimeout(timeEffect)
})
  return (
    <div className="my-4 text-2xl font-semibold text-center">
      <h2>
        {fixedTextContent}
        <span
          ref={autoTypeElement}
          className="text-amber-500 font-bold ml-2"
        ></span>
        <span className="animate-pulse">|</span>
      </h2>
    </div>
  );
};

export default AutoType;
