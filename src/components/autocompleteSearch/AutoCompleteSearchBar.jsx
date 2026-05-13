import React, { useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useState } from "react";
import js from "@eslint/js";

const AutoCompleteSearchBar = () => {
  const [similarSearch, setSimilarSearch] = useState([]);
  const [userQuery, setUserQuery] = useState("");
  const [cache, setCache] = useState({});
  const [showResults, setShowResults] = useState(false);
  // console.log(showResults)

  const fetchAutoData = async () => {
    if (cache[userQuery]) {
      console.log(userQuery, "Cache returned");
      setSimilarSearch(cache[userQuery]);
      return;
    }

    try {
      const findData = await fetch(
        `https://dummyjson.com/recipes/search?q=${userQuery}&limit=10`,
      );
      const searchData = await findData.json();
      // console.log(searchData.recipes)
      setSimilarSearch(searchData.recipes);

      setCache((prev) => {
        // console.log(searchData.recipes)
        return { ...prev, [userQuery]: searchData.recipes };
      });
    } catch (err) {
      console.error("Unable to fetch the data", err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchAutoData();
    }, 400);

    return () => clearTimeout(timer);
  }, [userQuery]);

  const [darkMode] = useTheme();
  return (
    <section className={`w-full ${darkMode ? "darkModeActive" : ""}`}>
      <div className={`w-full max-w-6xl p-4 m-auto min-h-[calc(100vh-100px)]`}>
        <h1 className="font-bold text-2xl text-center">
          Auto Complete Search Bar in{" "}
          <span className="text-sky-400">React</span>&nbsp;
          <i className="fa-solid fa-magnifying-glass text-amber-500"></i>
        </h1>
        <div className="w-4xl mx-auto mt-8">
          <form action="https://www.google.com/search">
            <div className="flex gap-4">
              <input
                className="border w-1/2 px-4 py-2 rounded"
                placeholder="Find the recipe here..."
                type="search"
                value={userQuery}
                name="q"
                onChange={(e) => {
                  setUserQuery(e.target.value);
                }}
                onFocus={() => {
                  setShowResults(true);
                }}
                // onBlur={() => {
                //     setShowResults(false)
                // }}
              />
              <button className="cursor-pointer px-4 bg-amber-500 rounded text-black font-medium">
                Submit
              </button>
            </div>
          </form>
          <ul className="w-1/2 shadow overflow-y-scroll max-h-96 mt-4">
            {showResults
              ? similarSearch.map((item, index) => {
                  return (
                    <li
                      key={item.id}
                      className="cursor-pointer hover:bg-gray-300 hover:text-black px-4"
                      onClick={(e) => {
                        // console.log(e.target.textContent)
                        setUserQuery(e.target.textContent);
                      }}
                    >
                      {item.name}
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AutoCompleteSearchBar;
