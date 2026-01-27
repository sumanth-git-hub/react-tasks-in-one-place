import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../hooks/UseTheme";
import { Link } from "react-router-dom";

const StockFreeImages = () => {
  const [darkMode] = useTheme();
  // let page = 2;
  const accessKey = `ilIzVD_2by3ccQx4TOw2-6AkFCRGUXJJLcmmcRk-RTI`;
  const [isImageData, setIsImageData] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [query, setQuery] = useState("");
  const inputRefElement = useRef(null);

  function submitQuery(e) {
    e.preventDefault();
    setQuery(inputRefElement.current.value.trim());
  }

  useEffect(() => {
    const searchQuery = query === "" ? "random" : query;

    fetch(
        `https://api.unsplash.com/search/photos?page=${pageCount}&query=${searchQuery}&client_id=${accessKey}&per_page=30`
      )
        .then((response) => response.json())
        .then((imageData) => {
          setIsImageData(imageData.results);
        }).catch((err) => console.error("Fetch Error:", err));

    // if (query === "") {
    //   fetch(
    //     `https://api.unsplash.com/search/photos?page=${pageCount}&query=random&client_id=${accessKey}&per_page=30`
    //   )
    //     .then((response) => response.json())
    //     .then((imageData) => {
    //       setIsImageData(imageData.results);
    //     });
    // } else {
    //   fetch(
    //     `https://api.unsplash.com/search/photos?page=${pageCount}&query=${query}&client_id=${accessKey}&per_page=12`
    //   )
    //     .then((response) => response.json())
    //     .then((imageData) => {
    //       setIsImageData(imageData.results);
    //     });
    // }
  }, [query, pageCount]);

  // console.log(isImageData)
  return (
    <section className={`w-full ${darkMode ? "darkModeActive" : ""}`}>
      <div className={`w-full max-w-6xl min-h-[calc(100vh-100px)] p-4 m-auto`}>
        <form className="relative w-full">
          <input
            ref={inputRefElement}
            type="text"
            placeholder="Search images here.."
            id="search-input"
            className={`w-full p-4 rounded-xl outline-0 ${
              darkMode ? "darkShadow bg-black" : "applyShadow"
            }`}
          />
          <button
            onClick={(e) => {
              submitQuery(e);
            }}
            className="bg-amber-500 p-4 rounded-r-xl absolute top-0 right-0 w-1/3 cursor-pointer text-black font-semibold"
          >
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
            &nbsp;&nbsp;Search
          </button>
        </form>
        <div className="imagesSection mt-10 flex flex-wrap gap-4 justify-center">
          {isImageData?.map((displayImages, index) => {
            return (
              <Link
                key={index}
                className="rounded overflow-hidden"
                target="_blank"
                to={displayImages.links.html}
              >
                <img
                  loading="lazy"
                  className="object-cover inline-block w-full h-80"
                  src={displayImages.urls.full}
                  alt={displayImages.alternative_slugs.de}
                />
              </Link>
            );
          })}
        </div>
        <div className="flex">
          <button
          disabled = {pageCount === 1}
            onClick={() => {
              setPageCount((prev) => Math.max(prev - 1, 1));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-amber-500 p-4 rounded-xl w-1/4 cursor-pointer text-black font-semibold mx-auto block mt-4"
          >
            <i className="fa-solid fa-arrow-left"></i>&nbsp;Previous
          </button>
          <button

            onClick={() => {
              setPageCount((prevState) => prevState + 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-amber-500 p-4 rounded-xl w-1/4 cursor-pointer text-black font-semibold mx-auto block mt-4"
          >
            Next&nbsp;<i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StockFreeImages;
