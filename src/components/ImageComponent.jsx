import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

export default function ImageComponent({source,meaning}) {

    // const [isLoaded, setIsLoaded] = useState(false)
    const {isLoaded, setIsLoaded} = useOutletContext()

  return (
    <div>
        <img src={source} alt={meaning} loading='lazy' onLoad={() => {
            setIsLoaded(true) 
        }} className={`block w-full max-w-2xl mx-auto ${isLoaded ? 'transition duration-1000 ease-in-out opacity-100 blur-0': 'bg-gray-200 opacity-0 blur-sm'}`}/>
    </div>
  )
}
