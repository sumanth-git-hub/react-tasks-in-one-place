import { useState } from "react";

export function useFilter(setContent, callBack) {
    const [filterQuery, setFilterQuery] = useState("")

   const filterData = setContent.filter((expenseElement) => {
  return  callBack(expenseElement).toLowerCase().includes(filterQuery)
   })
    
   return [filterData, setFilterQuery]
}