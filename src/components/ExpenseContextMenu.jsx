import React from 'react'

export default function ContextMenu({menuPosition, setMenuPosition,setExpense,rowId,setInputValues,expenses,setElementEditing}) {
  if(!menuPosition.left) return
  return (
    <div className="context-menu border absolute rounded-lg overflow-hidden shadow-xl bg-white text-black" style={menuPosition}>
            <div className='p-2 cursor-pointer font-semibold hover:bg-gray-300' onClick={(e) => {
              console.log(rowId)
              
              console.log(expenses)
             const {title,category,amount} =  expenses.find((findEditingRow) => {
                return findEditingRow.id === rowId
              })
              setInputValues({title,category,amount})
              setElementEditing(rowId)
              setMenuPosition({})
              // setInputValues({
              //   title: "Hello",
              //   category: "",
              //   amount: "",
              //   email: ""
              // })
            }}>Edit</div>
            <div className='p-2 cursor-pointer font-semibold hover:bg-gray-300' onClick={(e) => {
              setMenuPosition({})
              setExpense((prevState) => prevState.filter((removeExpense) => {
                return removeExpense.id !== rowId
              }))
            }}>Delete</div>
        </div>
  )
}
