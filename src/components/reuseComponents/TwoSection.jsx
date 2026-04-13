import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { useOutletContext } from "react-router-dom";

const TwoSection = ({
  heading,
  yellowText,
  blueText,
  divider,
  imageLink,
  altTag,
  children,
}) => {
  const [darkMode] = useTheme();
  const { isLoaded, setIsLoaded } = useOutletContext();
  return (
    <section className={`w-full ${darkMode ? "darkModeActive" : ""}`}>
      <div className={`w-full max-w-6xl p-4 m-auto min-h-[calc(100vh-100px)]`}>
        <h2 className="my-2 text-center text-2xl font-bold">
          {heading}
          <span className="text-yellow-400">{yellowText}</span>
          <span>{divider}</span>
          <span className="text-sky-500">{blueText}</span>
        </h2>
        <div className="gap-4 items-center md:flex">
          <div>
            <img
              className={`w-full ${isLoaded ? "transition duration-1000 ease-in-out opacity-100 blur-0" : "bg-gray-200 opacity-0 blur-sm"}`}
              src={imageLink}
              alt={altTag}
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
            />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default TwoSection;
