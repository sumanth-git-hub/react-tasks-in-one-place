import React, { useEffect, useRef } from "react";
import { useTheme } from "../hooks/UseTheme";
import { Form } from "react-router-dom";
import { useState } from "react";
import ExpenseInputElement from "./ExpenseInputElement";
import ExpenseCategoryInput from "./ExpenseCategoryInput";

export default function ExpenseForm({ setExpense, inputValues, setInputValues,elementEditing, setElementEditing }) {
  const [darkMode] = useTheme();

  // const [inputValues, setInputValues] = useState({
  //   title: "",
  //   category: "",
  //   amount: "",
  //   email: "",
  // });

  // used useRef() to extract the values from the form but controlled input method is recommended so commenting this below code "useRefMethodComment"

  // const titleRef = useRef(null);
  // const categoryRef = useRef(null);
  // const amountRef = useRef(null);
  // const formRef = useRef(null);

  const buttonRef = useRef(null);
  const [inputError, setInputError] = useState({});

  useEffect(() => {
    buttonRef.current.style.backgroundColor = "#fa0";
  }, []);


  // specific validation are written here with minLength, pattern

  const inputConditions = {
    title : [
      {required: true, message: "Please Enter the Item"},
      {minLength: 3, message: "Title should be at lease 3 characters long"}
    ],
    amount : [
      {required: true, message: "Please Enter the Amount of the Item"},
      {type: Number, message: "Please Enter the Amount in Number Format"}
    ],
    category : [
      {required: true, message: "Please Select a Category"}
    ],email : [
      {required: true, message: "Please Enter the Email Address"},
      {pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ,message: "Please enter a valid email address"}
    ]
  }
// console.log(inputConditions)

function inputValidation(inputData) {
  const errorObject = {};
// console.log(Object.entries(inputData))

Object.entries(inputData).forEach(([key, value]) => {
  // console.log(key, value)
  inputConditions[key].some((rule) => {
    // console.log(rule)

    if(rule.required && !value){
      errorObject[key] = rule.message
      return true
    }
    if(rule.minLength && value.length < 3){
      errorObject[key] = rule.message
      return true
    }
    if(rule.type === Number && !/^-?\d*\.?\d+$/.test(value)){
      errorObject[key] = rule.message
    }
    if(rule.pattern && !rule.pattern.test(value)){
      errorObject[key] = rule.message

      return true
    }
  })
})

setInputError(errorObject)
 return errorObject;
}


/*

// here we have written the condition when the user try to submit without entering the content on input elements

  function inputValidation(inputData) {
    const errorObject = {};
    if (!inputData.title) {
      errorObject.title = "Please Enter the Item Name";
    }
    if (!inputData.category) {
      errorObject.category = "Please Select the Category";
    }
    if (!inputData.amount) {
      errorObject.amount = "Please Enter the Amount of the Item";
    }
    if (!inputData.email) {
      errorObject.email = "Please Enter the Email Address";
    }

    console.log(errorObject);
    setInputError(errorObject);
    return errorObject;
  }
  */

  function submitForm(e) {
    e.preventDefault();

    const validateInputValues = inputValidation(inputValues);
    // console.log(Object.keys(validateInputValues).length);

    // if(Object.keys(validateInputValues).length) return

    if (Object.keys(validateInputValues).length > 0) {
      return;
    }
    if(elementEditing){
      setExpense((prevState) => prevState.map((yesEditing) => {
        if(yesEditing.id === elementEditing){
          return {...inputValues, id: elementEditing} 
        }
        return yesEditing
      }))
      setInputValues({
      title: "",
      category: "",
      amount: "",
    });
      setElementEditing('')
      return
    }
    /*
    // "#new FormDataComment"
    getFormData(e.target)
    const passExpenseObject = {...getFormData(e.target), id: crypto.randomUUID()}
    setExpense((prevState) => [...prevState, passExpenseObject])
    e.target.reset()
    */

    const passInputValuesWithId = { ...inputValues, id: crypto.randomUUID() };
    setExpense((prevState) => [...prevState, passInputValuesWithId]);
    setInputValues({
      title: "",
      category: "",
      amount: "",
      email: "",
    });

    /*
    // "useRefMethodComment"

    const dataObject = {
      title: titleRef.current.value,
      category: categoryRef.current.value,
      amount: amountRef.current.value,
    };
    console.log(dataObject)

    setExpense((prevState) => [...prevState, {...dataObject, id: crypto.randomUUID()}])

    formRef.current.reset()
    */
  }

  // we used controlled input method to avoid the usage of new FormData() constructor method, so i have commented the below code "#new FormDataComment"

  // const getFormData = (form) => {
  //       const formData = new FormData(form)
  //   const objectData = {}
  //   for(const [key, values] of formData.entries()){
  //     objectData[key] = values
  //   }
  //   console.log(objectData)
  //   return objectData
  // }

  function newInputValue(e) {
    // console.log(`Name: ${e.target.name} value: ${e.target.value}`);
    const { name, value } = e.target;
    // const KeyValuePairs = {}
    // KeyValuePairs[name] = value
    // console.log(KeyValuePairs)

    setInputValues((prevState) => ({ ...prevState, [name]: value }));

    setInputError({});
  }

  return (
    <form
      // ref={formRef}
      className="expense-form w-full mb-6"
      onSubmit={submitForm}
    >
      <ExpenseInputElement
        id={"title"}
        name={"title"}
        label={"Title"}
        value={inputValues.title}
        onChange={newInputValue}
        inputError={inputError.title}
        placeholder={"Enter the Item Name"}
      />
      <ExpenseCategoryInput
        id={"category"}
        name={"category"}
        label={"Category"}
        onChange={newInputValue}
        inputError={inputError.category}
        value={inputValues.category}
        defaultValue={"Select Category"}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
      />
      <ExpenseInputElement
        id={"amount"}
        name={"amount"}
        label={"Amount"}
        value={inputValues.amount}
        onChange={newInputValue}
        inputError={inputError.amount}
        placeholder={"Enter an Amount"}
      />
      <ExpenseInputElement
        id={"email"}
        name={"email"}
        label={"Email"}
        value={inputValues.email}
        onChange={newInputValue}
        inputError={inputError.email}
        placeholder={"Enter the Email Address"}
      />
      <button
        ref={buttonRef}
        className={`add-btn w-full h-8 font-semibold mt-6 cursor-pointer text-black ${
          darkMode ? "darkShadow" : "applyShadow"
        } rounded`}
      >{elementEditing ? "Save" : "Add"}</button>
    </form>
  );
}
