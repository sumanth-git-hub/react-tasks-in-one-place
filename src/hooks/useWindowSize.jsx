import React, { useEffect, useState } from 'react'

export default function useWindowSize() {
      const [screenSize, setScreenSize] = useState({width: window.innerWidth, height: window.innerHeight})
    useEffect(() => {
        window.addEventListener('resize', () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      })
    },[0])
  return ([screenSize])
}
