import React, { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import FallbackComponent from "./FallbackComponent";

const Pagination = () => {
  const [darkMode] = useTheme();
  const [userData, setUserData] = useState(null);
  const [currentPageData, setCurrentPageData] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const indexOfLastItem = currentPageData * rowsPerPage;
  const firstIndexItem = indexOfLastItem - rowsPerPage;
  //   const currentItems = userData?.users?.slice(firstIndexItem, indexOfLastItem);
  //   const totalPages = Math.ceil(userData.total / rowsPerPage);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUser = userData?.users?.filter((user) => {
    return user.firstName.toLowerCase().includes(searchTerm.toLowerCase());
  });
  // console.log(filteredUser)
  const currentItems = filteredUser?.slice(firstIndexItem, indexOfLastItem);
  const totalPages = Math.ceil((filteredUser?.length || 0) / rowsPerPage);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=0")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        // console.log(data.users.slice(firstIndexItem, indexOfLastItem))
      });
  }, []);

  function handlePrev() {
    setCurrentPageData((prev) => Math.max(prev - 1, 1));
  }

  function handleNext() {
    setCurrentPageData((prev) => Math.min(prev + 1, totalPages));
  }

  function handleCurrent(pageNumber) {
    setCurrentPageData(pageNumber);
  }

  useEffect(() => {
    setCurrentPageData(1);
  }, [searchTerm]);

  return (
    <section className={`w-full ${darkMode ? "darkModeActive" : ""}`}>
      <div className={`w-full max-w-6xl min-h-[calc(100vh-100px)] p-4 m-auto`}>
        <h1 className="text-3xl font-semibold text-center mb-8">
          Pagination in <span className="text-sky-300">React</span>
        </h1>
        <div>
          <div className="w-full max-w-xs md:max-w-lg px-4 py-2 rounded-xl flex flex-row items-center my-5  z-10 darkShadow">
            <i
              className="fa-solid fa-magnifying-glass px-4"
              aria-hidden="true"
            ></i>
            <input
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              className="w-full outline-none"
              placeholder="Find User Details"
              value={searchTerm}
              type="text"
            />
          </div>
        </div>
        <div className="w-full overflow-scroll">
          <table>
            <thead>
              <tr className="bg-amber-500 text-black overflow-hidden">
                <th className="border px-2 w-1/8">Name</th>
                <th className="border px-2 w-1/8">Email ID</th>
                <th className="border px-2 w-1/8">Contact Number</th>
                <th className="border px-2 w-1/8">Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              {/* {currentItems?.map((getUserData, index) => {
                // console.log(getUserData.firstName)
                return ( 
                  <tr key={index}>
                    <td className="border px-2">{getUserData.firstName}</td>
                    <td className="border px-2">{getUserData.email}</td>
                    <td className="border px-2">{getUserData.phone}</td>
                    <td className="border px-2">{getUserData.birthDate}</td>
                  </tr>
                );
              })} */}

              {!userData ? (
                <tr className="border">
                  <td colSpan="4" className="text-center py-4">
                    Please Wait for a Minute!
                  </td>
                </tr>
              ) : currentItems?.length > 0 ? (
                currentItems.map((getUserData, index) => (
                  <tr key={index} className="bg-gray-300 text-black">
                    <td className="border px-2 w-1/8">
                      {getUserData.firstName}
                    </td>
                    <td className="border px-2 w-1/8 ">{getUserData.email}</td>
                    <td className="border px-2 w-1/8 ">{getUserData.phone}</td>
                    <td className="border px-2 w-1/8 ">
                      {getUserData.birthDate}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border">
                  <td colSpan="4" className="text-center py-4">
                    Sorry No users found!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="pagination-button mt-10 flex justify-center">
          <button
            onClick={() => {
              handlePrev();
            }}
            disabled={currentPageData === 1}
            className="px-4 py-2 bg-gray-400 text-black rounded-xl mx-1 cursor-pointer"
          >
            Previous
          </button>
          <div className="scrollButtons flex overflow-x-scroll scrollbar-hide">
            {Array.from({ length: totalPages }, (_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    handleCurrent(index + 1);
                  }}
                  className={`px-4 py-2 text-black rounded-xl mx-1 cursor-pointer ${
                    currentPageData === index + 1
                      ? "bg-amber-500"
                      : "bg-gray-400"
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => {
              handleNext();
            }}
            className="px-4 py-2 bg-gray-400 text-black rounded-xl mx-1 cursor-pointer"
            disabled={currentPageData === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
