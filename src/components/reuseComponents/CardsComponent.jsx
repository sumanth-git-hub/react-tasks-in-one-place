import React, { lazy } from 'react'
import lazyLoadImage from '../../assets/react-lazy-load-image.png'
import { useTheme } from '../../hooks/UseTheme'
import { useOutletContext } from 'react-router-dom'

export const CardsComponent = ({projectName, lazyLoadImage, altTag, urlSlug}) => {
    const [darkMode] = useTheme()
    const {isLoaded, setIsLoaded} = useOutletContext()
  return (
    <div className={`w-[300px] overflow-hidden rounded-xl m-2 ${darkMode ? "darkShadow" : "applyShadow"}`}>
        <div className='h-80'>
            <img className={`object-cover h-full w-full ${isLoaded ? 'transition duration-1000 ease-in-out opacity-100 blur-0': 'bg-gray-200 opacity-0 blur-sm'}`} src={lazyLoadImage} alt={altTag} loading="lazy" onLoad={() => setIsLoaded(true)}/>
        </div>
        <div className='p-4'>
            <h3 className='text-xl font-bold mb-4'>{projectName}</h3>
            <a className="py-2 px-4 rounded-xl font-medium bg-amber-400 cursor-pointer text-black w-full block text-center" href={urlSlug} target='_blank'>Check Now</a>
        </div>
    </div>
  )
}
