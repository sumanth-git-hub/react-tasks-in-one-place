import React, { useState } from 'react'

const RatingComponent = () => {
    let starCounts = 5
    const [hoverValue, setHoverValue] = useState(0)
    const [clickValue, setClickValue] = useState(0)
    const [thanksMsg, setThanksMsg] = useState(false)
  return (
    <div className='text-center mb-15'>
        <p className='text-lg font-semi-bold'>Please Take a Moment to Rate my Work</p>
        {
          new Array(starCounts).fill(<span className='text-5xl'>&#9733;</span>).map((item, index) => {
                return <span 
                onMouseEnter={() => {
                    setHoverValue(index + 1)
                }}
                onClick={() => {
                    setClickValue(index + 1)
                    setThanksMsg(true)
                }}
                 onMouseLeave={() => {
                    setHoverValue(0)
                }}
                className={`inline-block mx-1 cursor-pointer text-xl ${ (index < clickValue && hoverValue === 0) || index < hoverValue ? 'text-amber-500': ""}`}  key={index}>{item}</span>
            })
        }
        {
          thanksMsg &&  <p>Thank you for Giving us a {clickValue} out of {starCounts} Rating <i className="fa-solid fa-handshake text-amber-500"></i></p>
        }
    </div>
  )
}

export default RatingComponent