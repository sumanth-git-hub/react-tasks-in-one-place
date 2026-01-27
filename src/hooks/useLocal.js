import { useEffect, useState } from "react"
//build this one for just understanding on the local storage custom hook
export const useLocal = (key, initialData) => {
    const [isData, setIsData] = useState(initialData)

    // console.log(isData)

        useEffect(() => {
            const isExistingData = JSON.parse(localStorage.getItem(key))

            if(isExistingData){
               setIsData(isExistingData) 
            }
            else {
                localStorage.setItem(key, JSON.stringify(isData))
            }
        },[])

      function updateLocalStorageFunction(isFunction) {
           if(typeof isFunction === "function"){
             localStorage.setItem(key, JSON.stringify(isFunction(isData)))
           }
           else {
            localStorage.setItem(key, JSON.stringify(isFunction))
           }
           setIsData(isFunction)
      }
        return [isData, updateLocalStorageFunction]
}

