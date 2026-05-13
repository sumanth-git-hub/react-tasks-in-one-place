import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../hooks/useTheme";

const ToastNotifications = () => {
  const [toasts, setToasts] = useState([]);
  const timerRef = useRef({});
  const [darkMode] = useTheme();

  const handleClick = (textMessage, notificationType) => {
    let id = crypto.randomUUID();
    setToasts((prevState) => [
      ...prevState,
      { message: textMessage, type: notificationType, id: id },
    ]);

    let timer;

    timer = setTimeout(() => {
      removeNotification(id);
    }, 3000);

    timerRef.current[id] = timer;
  };

  function removeNotification(elementId) {
    clearTimeout(timerRef.current[elementId]);
    delete timerRef.current[elementId];

    setToasts((prev) => {
      const filterNotification = prev.filter((deleteElement) => {
        return deleteElement.id !== elementId;
      });
      return filterNotification;
    });
  }

  useEffect(() => {
    return () => {
      Object.values(timerRef.current).forEach(clearTimeout);
    };
  }, []);

  return (
    <section className={`w-full ${darkMode ? "darkModeActive" : ""}`}>
      <div className={`w-full max-w-6xl p-4 m-auto min-h-[calc(100vh-100px)]`}>
        <h2 className="my-2 text-center text-2xl font-bold">
          Multiple Toast Notifications in{" "}
          <span className="text-sky-400">React</span>
        </h2>
        <div className="py-4">
          <ul className="fixed bottom-4 right-4">
            {toasts.map(({ id, message, type }) => {
              return (
                <li
                  key={id}
                  className={`toastNotification px-4 py-2 my-2 rounded text-black flex gap-8 justify-between items-center ${type}`}
                >
                  {message}&nbsp;
                  <i
                    className="fa-solid fa-circle-xmark hover:text-red-700 cursor-pointer"
                    onClick={() => {
                      removeNotification(id);
                    }}
                  ></i>
                </li>
              );
            })}
          </ul>
          <p className="mb-4">
            Click on the below added buttons to see the toast notifications
          </p>
          {/* <h3 className='mb-2 text-xl font-semibold'>Multiple Toast Notifications</h3> */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                handleClick("Successfully Completed!", "success");
              }}
              className="px-4 py-2 text-black rounded-xl font-semibold cursor-pointer success w-10/12 md:w-1/3"
            >
              Success Notification
            </button>
            <button
              onClick={() => {
                handleClick("Something Went Wrong", "warning");
              }}
              className="px-4 py-2 text-black rounded-xl font-semibold cursor-pointer warning w-10/12 md:w-1/3"
            >
              Warning Notification
            </button>
            <button
              onClick={() => {
                handleClick("No Information Available", "info");
              }}
              className="px-4 py-2 text-black rounded-xl font-semibold cursor-pointer info w-10/12 md:w-1/3"
            >
              More Info Notification
            </button>
            <button
              onClick={() => {
                handleClick("Found Error!", "error");
              }}
              className="px-4 py-2 text-black rounded-xl font-semibold cursor-pointer error w-10/12 md:w-1/3"
            >
              Error Notification
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToastNotifications;
