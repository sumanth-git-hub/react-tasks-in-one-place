import React, { useState } from 'react'
import { useTheme } from '../hooks/UseTheme'
import ExpenseTable from './ExpenseTable'
import ExpenseForm from './ExpenseForm'
import ExpenseDefaultData from './ExpenseDefaultData'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function ExpenseTracker() {
    const [darkMode] = useTheme()
    // const [expenses, setExpense] = useState(ExpenseDefaultData)
    const [expenses, setExpense] = useLocalStorage("expenses",ExpenseDefaultData)

    // console.log(fixCasing.join(" ").toLocaleString())
    // console.log(expenses)

      // const [inputValues, setInputValues] = useState({
      //   title: "",
      //   category: "",
      //   amount: "",
      //   email: "",
      // });
      const [inputValues, setInputValues] = useLocalStorage("inputValues", {
        title: "",
        category: "",
        amount: "",
        email: "",
      });

      // const [elementEditing, setElementEditing] = useState("")
      const [elementEditing, setElementEditing] = useLocalStorage("elementEditing","")

      // const [localData, setLocalData] = useLocalStorage("localData", [1,2,3])
      // console.log(localData)

  return (
    <section  className={`w-full min-h-[calc(100vh-100px)] ${
        darkMode ? "darkModeActive" : ""
      }`}>
        <div className={`w-full max-w-6xl p-4 mx-auto`}>

        <h1 className='font-bold text-2xl text-center'>Track Your Expense 📊</h1>
        {/* <button onClick={(e) => {
          // setLocalData((prevState) => [...prevState, 4,5,6])
          // setLocalData([4,5,6])
        }}>Click Local</button>
        <h2>{localData.join(", ")}</h2> */}
        <div className='expense-tracker-container mt-4 md:flex gap-8 justify-center items-center'>
            <ExpenseForm setExpense={setExpense} inputValues={inputValues} setInputValues={setInputValues} elementEditing={elementEditing} setElementEditing={setElementEditing}/>
            <ExpenseTable  expenses={expenses} setExpense={setExpense} setInputValues={setInputValues} setElementEditing={setElementEditing}/>
        </div>
        </div>
    </section>
  )
}
