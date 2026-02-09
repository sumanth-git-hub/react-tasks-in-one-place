import React, { useState } from "react";
import ExpenseDefaultData from './ExpenseDefaultData'
import { useFilter } from "../hooks/useFilter";
import ContextMenu from "./ExpenseContextMenu";
import { useLocalStorage } from "../hooks/useLocalStorage";


export default function ExpenseTable({expenses, setExpense, setInputValues, setElementEditing}) {

  const [filterResult, setFilterQuery] = useFilter(expenses, (element) => element.category)

const totalCount = filterResult.reduce((accumulator, current) => accumulator + parseFloat(current.amount),0)

// console.log(totalCount)
  // const filterData = expenses.filter((expense) => {
  //   return expense.category.toLowerCase().includes(userQuery)
  // })

  // const [contextMenuStyle, setContextMenuStyle] = useState({})
  const [contextMenuStyle, setContextMenuStyle] = useLocalStorage("contextMenuStyle",{})
  const [rowId, setRowId] = useState("")
  const [sortState, setSortState] = useState(() => {})


  function ascendingFunction() {
    setSortState(() => (a,b) => a.amount - b.amount)
  }

  function descendingFunction() {
 setSortState(() => (a,b) => b.amount - a.amount)
  }

  return (
    
   <>
   <ContextMenu menuPosition={contextMenuStyle} setMenuPosition={setContextMenuStyle} setExpense={setExpense} rowId={rowId} setInputValues={setInputValues} expenses={expenses} setElementEditing={setElementEditing}/>
    <table className="expense-table  w-full border-collapse" onClick={() => {
      if(contextMenuStyle.left){
        setContextMenuStyle({})
      }
    }}>
      <thead>
        <tr>
          <th><div className="flex justify-between">
            <span>Title</span>
            <div> <i className="fa-solid fa-arrow-up p-0.5 cursor-pointer text-green-700" title="A to Z" onClick={() => {
              setSortState(() => (a,b) => a.title.localeCompare(b.title))
            }}></i>
                <i className="fa-solid fa-arrow-down p-0.5 cursor-pointer text-red-700" title="Z to A" onClick={() => {
              setSortState(() => (a,b) => b.title.localeCompare(a.title))
            }}></i></div>
          </div>
          </th>
          <th>
            <select className="w-full border-0 outline-0 cursor-pointer text-inherit" onChange={(e) => {
              setFilterQuery(e.target.value.toLowerCase())
            }}>
              <option value="">All</option>
              <option value="Grocery">Grocery</option>
              <option value="Clothes">Clothes</option>
              <option value="Bills">Bills</option>
              <option value="Education">Education</option>
              <option value="Medicine">Medicine</option>
            </select>
          </th>
          <th className="amount-column">
            <div className="flex justify-between">
              <span className="mr-2">Amount</span>
                <div>
                  <i className="fa-solid fa-arrow-up p-0.5 cursor-pointer text-green-700" title="Ascending" onClick={ascendingFunction}></i>
                <i className="fa-solid fa-arrow-down p-0.5 cursor-pointer text-red-700" title="Descending" onClick={descendingFunction}></i>
                </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {
            filterResult.sort(sortState).map(({id, title,category,amount}) => {
                return      <tr className="cursor-pointer" onContextMenu={(e) => {
      e.preventDefault()
      setContextMenuStyle({left:e.clientX, top:e.clientY})
      setRowId(id)
    }} key={id}>
          <td>{title}</td>
          <td>{category}</td>
          <td>&#8377;&nbsp;{amount}</td>
        </tr>
            })
       
        }
        <tr>
          <th>Total</th>
          <th className="bg-gray-300 font-medium cursor-pointer flex gap-1 justify-center"><button className="cursor-pointer" onClick={() => {
            setSortState(() => () => {})
          }}><span className="text-green-700">Clear</span> <span className="text-red-700">Sort</span></button></th>
          <th>&#8377;&nbsp;{totalCount.toLocaleString('en-IN')}</th>
        </tr>
      </tbody>
    </table>
   </>
  );
}
