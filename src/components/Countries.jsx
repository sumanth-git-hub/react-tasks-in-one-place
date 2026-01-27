import React, { useEffect, useState } from "react";
import { useTheme } from "../hooks/UseTheme";
import CountryCard from "./CountryCard";
import FilterComponent from "./FilterComponent";
import { useOutletContext } from "react-router-dom";
import FallbackComponent from "./FallbackComponent";

export default function Countries() {
  const [darkMode] = useTheme();
  const [countryData, setCountryData] = useState(null);
  const { query, setQuery } = useOutletContext();

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/sumanth-git-hub/f48ba4fff04cbe336717c1c8c4804c77/raw/cb9dff2df94f30cdc69032a382c296b26b386e72/rest-countries-api-file.json"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setCountryData(data);
      });
  }, []);
  // console.log(countryData)
  return countryData === null ? (
    <FallbackComponent />
  ) : (
    <section
      className={`w-full min-h-[calc(100vh-100px)] ${
        darkMode ? "darkModeActive" : ""
      }`}
    >
      <div className={`w-full min-h-screen max-w-6xl p-4 m-auto`}>
        {/* <h2 className='text-center text-xl font-bold my-4'>Find All of the Country Details</h2> */}
        <FilterComponent
          query={query}
          setQuery={setQuery}
          placeholderContent={"Find All of the Countries"}
        />
        <div className="flex flex-wrap justify-center gap-8">
          {countryData
            .filter(
              (passCountryDetails) =>
                passCountryDetails.name.common.toLowerCase().includes(query) ||
                passCountryDetails.region.toLowerCase().includes(query)
            )
            .map((passCountryDetails, index) => {
              return (
                <CountryCard
                  key={index}
                  countryName={passCountryDetails.name.common}
                  countryPopulation={passCountryDetails.population.toLocaleString(
                    "en-IN"
                  )}
                  countryRegion={passCountryDetails.region}
                  countryCapital={passCountryDetails.capital}
                  countryFlag={passCountryDetails.flags.svg}
                  passData={passCountryDetails}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
