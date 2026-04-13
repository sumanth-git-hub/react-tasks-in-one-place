import React, { lazy } from "react";
import lazyLoadImage from "../../assets/react-lazy-load-image.png";
import { useTheme } from "../../hooks/useTheme";
import { Link, useOutletContext } from "react-router-dom";

export const CardsComponent = ({
  projectName,
  lazyLoadImage,
  altTag,
  urlSlug,
  productDescription,
  gitHubRepo,
}) => {
  const [darkMode] = useTheme();
  const { isLoaded, setIsLoaded } = useOutletContext();
  return (
    <div
      className={`w-[300px] overflow-hidden rounded-xl m-2 ${darkMode ? "darkShadow" : "applyShadow"}`}
    >
      <div className="h-80">
        <img
          className={`object-cover h-full w-full ${isLoaded ? "transition duration-1000 ease-in-out opacity-100 blur-0" : "bg-gray-200 opacity-0 blur-sm"}`}
          src={lazyLoadImage}
          alt={altTag}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-4">{projectName}</h3>
        <p className="text-sm mb-4">{productDescription}</p>
        {gitHubRepo && (
          <p className="text-sm mb-4">
            <a
              className="hover:text-amber-400"
              href={gitHubRepo}
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>&nbsp;View Code
            </a>
          </p>
        )}
        <Link
          className="py-2 px-4 rounded-xl font-medium bg-amber-400 cursor-pointer text-black w-full block text-center"
          to={urlSlug}
        >
          View Project
        </Link>
      </div>
    </div>
  );
};
