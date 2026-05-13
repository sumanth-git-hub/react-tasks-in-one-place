import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../hooks/useTheme";

const CharacterCounter = () => {
  const [darkMode] = useTheme();
  const textAreaElement = useRef(null);
  const characterCountElement = useRef(null);
  const wordCounterElement = useRef(null);

  const countCharacters = (text) => {
    const charCount = text.replace(/[\n]/g, "").length;

    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    const wordCount = text.trim() === "" ? 0 : words.length;

    if (characterCountElement.current) {
      characterCountElement.current.textContent = charCount;
    }
    if (wordCounterElement.current) {
      wordCounterElement.current.textContent = wordCount;
    }

    localStorage.setItem("storeContentValues", JSON.stringify(text));
    localStorage.setItem("fetchCharacterCount", JSON.stringify(charCount));
    localStorage.setItem("fetchWordCount", JSON.stringify(wordCount));
  };

  useEffect(() => {
    textAreaElement.current.value = JSON.parse(
      localStorage.getItem("storeContentValues"),
    );
    characterCountElement.current.textContent = JSON.parse(
      localStorage.getItem("fetchCharacterCount"),
    );
    wordCounterElement.current.textContent = JSON.parse(
      localStorage.getItem("fetchWordCount"),
    );
  }, []);

  return (
    <section className={`w-full ${darkMode ? "darkModeActive" : ""}`}>
      <div className={`w-full max-w-6xl min-h-[calc(100vh-100px)] p-4 m-auto`}>
        <h2 className="my-2 text-center text-2xl font-bold">
          Online Character Count Tool in{" "}
          <span className="text-sky-400">React</span>
        </h2>
        <textarea
          onChange={(e) => {
            countCharacters(e.target.value);
          }}
          ref={textAreaElement}
          placeholder="Start writing what you have in your mind!!"
          contentEditable="plaintext-only"
          className="bg-gray-200 w-full text-black outline-none rounded-t-xl p-4 h-[70vh] overflow-x-scroll"
          name="text"
          id="contentArea"
        ></textarea>
        <hr className="text-white" />
        <div className="bg-gray-200 text-black flex justify-around p-4 rounded-b-xl">
          <p>
            Character:&nbsp;<span ref={characterCountElement}>0</span>
          </p>
          <p>
            Words:&nbsp;<span ref={wordCounterElement}>0</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CharacterCounter;
