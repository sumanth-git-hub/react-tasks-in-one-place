import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../hooks/UseTheme";
import AccordionCom from "../multiStepForm/AccordionCom";

const ImageCardCarousel = () => {
  const [darkMode] = useTheme();
  const [imagesData, setImagesData] = useState([]);
  const [imageCount, setImageCount] = useState(0);

  const imageRequest = async () => {
    try {
      const fetchData = await fetch("https://picsum.photos/v2/list");
      const saveData = await fetchData.json();
      // console.log(saveData)
      setImagesData(saveData);
    } catch (err) {
      console.error(err, "Something went wrong while fetching the API");
    }
  };
  const increaseCount = () => {
    // if (imageCount < imagesData.length - 1) {
    //   setImageCount((prev) => {
    //     return prev + 1;
    //   });
    // } else {
    //   setImageCount(0);
    // }
    setImageCount((prevImageCount) => {
      return prevImageCount < imagesData.length - 1 ? prevImageCount + 1 : 0
    })
  };
  const decreaseCount = () => {
    // if (imageCount <= 0) {
    //   setImageCount(imagesData.length - 1);
    // } else {
    //   setImageCount((prev) => {
    //     return prev - 1;
    //   });
    // }
    setImageCount((prevImageNumber) =>  {
      return prevImageNumber === 0? imagesData.length-1: prevImageNumber - 1
    })
  };

const intervalRef = useRef(null)

useEffect(() => {
  imageRequest()
}, [])

useEffect(() => {
  if (imagesData.length === 0) return

  intervalRef.current = setInterval(() => {
    // setImageCount(prev =>
    //   prev === imagesData.length - 1 ? 0 : prev + 1
    // )
    increaseCount()
  }, 5000)

  return () => clearInterval(intervalRef.current)
}, [imagesData])

  return (
    <section className={`w-full ${darkMode ? "darkModeActive" : ""}`}>
      <div className={`w-full max-w-6xl p-4 m-auto min-h-[calc(100vh-100px)]`}>
        <h1 className="font-bold text-2xl text-center my-4">
          Images Card Carousel Component in{" "}
          <span className="text-sky-400">React</span>&nbsp;
          <i className="fa-solid fa-sliders text-amber-500"></i>
        </h1>
        <div onMouseEnter={() => {
            clearInterval(intervalRef.current)
        }} 
        onMouseLeave={() => {
            intervalRef.current = setInterval(() => {
    // setImageCount(prev =>
    //   prev === imagesData.length - 1 ? 0 : prev + 1
    // )
    increaseCount()
  }, 5000)
        }}
        className="container w-1/2 h-96 mx-auto relative">
          <div
            className="absolute top-1/2 left-1 cursor-pointer p-2 bg-amber-500 rounded-xl"
            onClick={() => {
              decreaseCount();
            }}
          >
            <i
              className="fa-solid fa-circle-chevron-left"
              aria-hidden="true"
            ></i>
          </div>
          {/* {
                    imageCount > 0 ?  <img className="object-cover w-full h-full" alt="random images" src={imagesData[imageCount].download_url} /> : <img className="object-cover w-full h-full" alt="images from picsum" src="https://picsum.photos/id/0/5000/3333" /> 

                } */}
          {imagesData.length > 0 && (
            <img
              className="object-cover w-full h-full"
              alt="random images"
              src={imagesData[imageCount]?.download_url}
            />
          )}
          <div
            className="absolute top-1/2 right-1 cursor-pointer p-2 bg-amber-500 rounded-xl"
            onClick={() => {
              increaseCount();
            }}
          >
            <i
              className="fa-solid fa-circle-chevron-right"
              aria-hidden="true"
            ></i>
          </div>
          <p className="text-center">
            Now you're seeing{" "}
            <span className="text-amber-500">{imageCount + 1}</span> image out
            of {imagesData.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageCardCarousel;
