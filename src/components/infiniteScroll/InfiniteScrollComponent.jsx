import React, { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";

const InfiniteScrollComponent = () => {
  const [darkMode] = useTheme();
  const [imageData, setImageData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  // console.log(pageNumber)

  const fetchApi = async () => {
    try {
      const fetchData = await fetch(
        `https://picsum.photos/v2/list?page=${pageNumber}&limit=3`,
      );
      const getData = await fetchData.json();
      setImageData((prevImageData) => {
        return [...prevImageData, ...getData];
      });
      // setImageData(getData)
    } catch (err) {
      console.error(err, "API fetching error");
    }
  };

  useEffect(() => {
    fetchApi();
  }, [pageNumber]);

  useEffect(() => {
    const lastImageElement = document.querySelector(
      ".image-element:last-child",
    );
    if (!lastImageElement) return;

    const observerFunction = new IntersectionObserver(
      (entries) => {
        // console.log(entries)
        if (entries[0].isIntersecting) {
          observerFunction.unobserve(lastImageElement);
          setPageNumber((prevNumber) => {
            return prevNumber + 1;
          });
        }
      },
      { threshold: 0.1 },
    );

    observerFunction.observe(lastImageElement);

    return () => {
      observerFunction.unobserve(lastImageElement);
      observerFunction.disconnect();
    };
  }, [imageData]);
  return (
    <section className={`w-full ${darkMode ? "darkModeActive" : ""}`}>
      <div className={`w-full max-w-6xl p-4 m-auto min-h-[calc(100vh-100px)]`}>
        <h1 className="font-bold text-2xl text-center my-4">
          Infinite Scroll Function Component in{" "}
          <span className="text-sky-400">React</span>&nbsp;
          <i className="fa-solid fa-scroll text-amber-500"></i>
        </h1>
        <div className="flex flex-col gap-3 justify-center items-center cursor-all-scroll">
          {imageData.map((item, index) => {
            return (
              <img
                className="md:w-1/4 h-80 object-cover rounded-lg image-element"
                key={index}
                src={item.download_url}
                alt={item.author}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfiniteScrollComponent;
