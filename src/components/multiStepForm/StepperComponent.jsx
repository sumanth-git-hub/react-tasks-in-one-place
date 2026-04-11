import React from 'react'
// import Steps from './Steps'

const StepperComponent = ({formCount, setFormCount, newSteps}) => {
    // console.log(handleNext)
    // console.log(newSteps)

    const switchTab = (count) => {
        const isValid = newSteps[formCount].addValidation();
        if(isValid || formCount > count){
            setFormCount(count)
        }
        // handleNext()
        // if(handleNext()){
        //     console.log(count)
        //     setFormCount(count)
        // }
    }

  return (
    <div className='flex  justify-center items-center md:flex-col'>
        {
            newSteps.map((item, index) => {
                // console.log(item.componentName)
                return  <div key={index} className={`flex flex-col px-2 justify-center w-35 items-center mb-8 relative md:w-80 md:px-4`}>
        <span className={`p-2 md:p-4 w-full rounded-lg text-center text-black cursor-pointer  ${formCount >= index ? 'bg-amber-500' : 'bg-gray-300'}`} onClick={() => {
            switchTab(index)
        }}>{item.componentName}</span>
        {formCount  > index && <span className='md:w-1 bg-red-500 md:h-8 absolute md:top-14 md:left-40 w-4 h-2 left-29.5'></span>}
        {/* <span className='w-1 bg-red-500 h-8'></span> */}
        </div>
            })
        }
        
        {/* <span className='p-4 bg-gray-300 w-full rounded-lg text-center text-black cursor-pointer'>Company Details</span>
        <span className='w-1 bg-red-500 h-8'></span>
        <span className='p-4 bg-gray-300 w-full rounded-lg text-center text-black cursor-pointer'>Industry Details</span> */}
    </div>
  )
}

export default StepperComponent