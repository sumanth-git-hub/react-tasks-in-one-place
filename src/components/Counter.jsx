import React, { useState } from 'react'

export default function Counter(props) {

    // const {children} = props

    const [count, setCount] = useState(0)
    // console.log("Rendering")
  return (
    <>
        <h2 className='text-xl pt-4'>{props.children}</h2>
        <div className='flex gap-4 p-4'>
        <p title='decrease counts' className='cursor-pointer select-none' onClick={() => {
            setCount((prevState) => prevState - 1)
            // console.log(count)
        }}>-</p>
        <p className='w-2'>{count}</p>
        <p className='cursor-pointer select-none' title='increase counts' onClick={() => {
            setCount((prevState) => prevState + 1)
            // console.log(count)
        }}>+</p>
    </div>
    </>
  )
}
