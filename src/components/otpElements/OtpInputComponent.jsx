import React, { useEffect, useRef, useState } from 'react'

const OtpInputComponent = () => {
    const inputCount = 4
    const [otpInputs, setOtpInputs] = useState(new Array(inputCount).fill(""))
    const refInput = useRef([])
    // console.log(refInput.current)

    const handleOtp = (element, index) => {
        if(isNaN(element)) return
        // console.log([...otpInputs])
        const newArray = [...otpInputs]
        const newValue = element.trim()
        newArray[index] = newValue.slice(-1)
        setOtpInputs(newArray)
        newValue && refInput.current[index + 1]?.focus()
    }
    const handleKeyDown = (element, index) => {
        element.key === "Backspace" && !element.target.value && refInput.current[index - 1]?.focus()
    }
    useEffect(() => {
        refInput.current[0].focus()
    }, [])

  return (
    <div>
        {
            otpInputs.map((item, index) => {
                return <input id='enter-otp' onChange={(e) => {
                    handleOtp(e.target.value, index)
                }} className='w-8 h-8 border-1 border-white mx-1 md:mx-2 inline-block text-center rounded'
                    ref = {currentRefInput => refInput.current[index] = currentRefInput}
                 key={index} type="text" value={otpInputs[index]} 
                 onKeyDown={(e) => {
                    // console.log(e.key)
                    handleKeyDown(e, index)
                 }}
                 />
            })
        }
    </div>
  )
}

export default OtpInputComponent