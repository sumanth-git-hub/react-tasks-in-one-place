import React from 'react'
import { useTheme } from '../hooks/UseTheme'
import { Link, useOutletContext } from 'react-router-dom'

export default function CountryCard({countryName, countryPopulation, countryRegion, countryCapital,countryFlag, passData}) {
    const [darkMode] = useTheme()
        const {isLoaded, setIsLoaded} = useOutletContext()
  return (
    <div>
        <Link state={passData} className="countries-list" to={`/${countryName}`}><div className={`w-[250px] rounded-xl overflow-hidden shadow-lg mb-3 ${darkMode ? 'darkShadow' : ""}`}><div className="h-[250px] overflow-hidden"><img loading='lazy' onLoad={() => setIsLoaded(true)} className={`w-full h-full object-cover ${isLoaded ? 'transition duration-1000 ease-in-out opacity-100 blur-0': 'bg-gray-200 opacity-0 blur-sm'}`} alt={`${countryName} flag`} src={countryFlag} /></div><div className='p-4'><h3 className='text-lg my-2 font-bold'>{countryName}</h3><p><span>Population: </span>{countryPopulation}</p><p><span>Region: </span>{countryRegion}</p><p><span>Capital: </span>{countryCapital}</p></div></div></Link>
    </div>
  )
}
