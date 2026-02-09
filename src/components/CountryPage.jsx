import React, { useEffect, useState } from "react";
import { useTheme } from "../hooks/UseTheme";
import { Link, useLocation, useNavigate, useOutletContext, useParams } from "react-router-dom";
import FallbackComponent from "./FallbackComponent";
import ErrorPage from "./ErrorPage"

export default function CountryPage() {
  const [darkMode] = useTheme();
      const navigate = useNavigate();
      const URLParameters = useParams()
      const fetchCountry = URLParameters.country.toLocaleLowerCase();
      const [countryDetails, setCountryDetails] = useState(null)
      const [countryNotFound, setCountryNotFound] = useState(false);
      const {isLoaded, setIsLoaded} = useOutletContext()
      // const fetchData = useLocation()
      const {state} = useLocation()
      // console.log(state)

      function useMainData(findData){
            setCountryDetails({
            countryName: findData.name.common,
            countryNativeName: Object.values(findData.name.nativeName)[0].common,
            countryFlag: findData.flags.svg,
            countryCapital: findData.capital,
            countryPopulation: findData.population.toLocaleString("en-IN"),
            countryRegion: findData.region,
            countrySubRegion: findData.subregion ? findData.subregion : "Not Available",
            countryTLD: findData.tld.join(', '),
            countryCurrency: Object.values(findData.currencies).map((currency) => currency.name),
            countryLanguages: Object.values(findData.languages).join(", "),
            countryBorders: [],
          })

          if(!findData.borders){
            findData.borders = []
          }

     if(findData.borders && findData.borders.length > 0){
      Promise.all(findData.borders.map((findBorder) => {
           return fetch(`https://restcountries.com/v3.1/alpha/${findBorder}`)
            .then((res) => res.json())
            .then(([borderCountries]) =>  borderCountries.name.common)
          })).then((allBordersName) => {
            // console.log("Namasthe React")
              setCountryDetails((prevState) => ({...prevState, countryBorders: allBordersName}))
              // console.log(allBordersName)
            })
     }
}

      useEffect(() => {

        if(state){
        // console.log(state.name.common)
        useMainData(state)
        return
      }

        fetch(`https://restcountries.com/v3.1/name/${fetchCountry}?fullText=true`)
        .then((res) => res.json())
        .then(([findData]) => {
          // console.log(findData)
          useMainData(findData)
          //made the below written code as a function for reuse 
          /*
          setCountryDetails({
            countryName: findData.name.common,
            countryNativeName: Object.values(findData.name.nativeName)[0].common,
            countryFlag: findData.flags.svg,
            countryCapital: findData.capital,
            countryPopulation: findData.population.toLocaleString("en-IN"),
            countryRegion: findData.region,
            countrySubRegion: findData.subregion ? findData.subregion : "Not Available",
            countryTLD: findData.tld.join(', '),
            countryCurrency: Object.values(findData.currencies).map((currency) => currency.name),
            countryLanguages: Object.values(findData.languages).join(", "),
            countryBorders: [],
          })

          if(!findData.borders){
            findData.borders = []
          }

     if(findData.borders && findData.borders.length > 0){
      Promise.all(findData.borders.map((findBorder) => {
           return fetch(`https://restcountries.com/v3.1/alpha/${findBorder}`)
            .then((res) => res.json())
            .then(([borderCountries]) =>  borderCountries.name.common)
          })).then((allBordersName) => {
            // console.log("Namasthe React")
              setCountryDetails((prevState) => ({...prevState, countryBorders: allBordersName}))
              console.log(allBordersName)
            })
     }
          */
          // console.log(countryDetails.countryName)
        }).catch((displayError) => {
            setCountryNotFound(true)
            // console.log(displayError)
          })
      }, [fetchCountry])
// console.log(countryNotFound)

// console.log(countryDetails?.countryBorders)

      if(countryNotFound === true){
        return <ErrorPage />
      }
  return ( countryDetails === null ? <FallbackComponent /> :
    <section
      className={`w-full  ${
        darkMode ? "darkModeActive" : ""
      }`}
    >
      <div className={`w-full min-h-[calc(100vh-100px)] max-w-6xl p-4 mx-auto`}>
        <button onClick={() => {
            navigate(-1)
        }} className={`cursor-pointer rounded-md px-4 py-1 ${darkMode ? 'darkShadow' : 'applyShadow'}`}><i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back</button>
        <div className="flex mt-10 flex-wrap gap-8">
          <div
            className={`w-full max-w-md rounded-2xl overflow-hidden h-[400px] ${
              darkMode ? "darkShadow" : "applyShadow"
            }`}
          >
            <img
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
              className={`w-full h-full object-cover overflow-hidden ${isLoaded ? 'transition duration-1000 ease-in-out opacity-100 blur-0': 'bg-gray-200 opacity-0 blur-sm'} `}
              src={`${countryDetails.countryFlag}`}
              alt={`${countryDetails.countryName} Flag`}
            />
          </div>
          <div className="contentArea self-center">
            <h3 className="text-2xl font-bold mb-4">{countryDetails.countryName}</h3>
            <div className="subContentArea flex md:max-h-52 gap-x-16 gap-y-4 flex-col flex-wrap">
              <p className="font-semibold">
                Native Name: <span>{countryDetails.countryNativeName}</span>
              </p>
              <p className="font-semibold">
                Population : <span>{countryDetails.countryPopulation}</span>
              </p>
              <p className="font-semibold">
                Region : <span>{countryDetails.countryRegion}</span>
              </p>
              <p className="font-semibold">
                Sub Region : <span>{countryDetails.countrySubRegion}</span>
              </p>
              <p className="font-semibold">
                Capital : <span>{countryDetails.countryCapital}</span>
              </p>
              <p className="font-semibold">
                Top Level Domain : <span>{countryDetails.countryTLD}</span>
              </p>
              <p className="font-semibold">
                Currencies : <span>{countryDetails.countryCurrency.join(', ')}</span>
              </p>
              <p className="font-semibold">
                Languages : <span className="w-full">{countryDetails.countryLanguages}</span>
              </p>
            </div>
            <div className="mt-10 flex gap-4 items-center flex-wrap">
              Border Countries : 
              { 
              countryDetails?.countryBorders.length !==0 ?
                countryDetails?.countryBorders.map((setBorder, index) => {
                  return  <Link key={index} to={`/${setBorder}`}
                className={`px-4 py-1 rounded-md cursor-pointer ${
                  darkMode ? "darkShadow" : "applyShadow"
                }`}
              >
                {setBorder}
              </Link>
                }) : <span>No Borders Available</span>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
