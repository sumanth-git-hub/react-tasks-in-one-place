import React from 'react'

const UserInfo = ({inputValues, setInputValues, errorElement, setErrorElement}) => {
  const {name, phoneNumber, emailAddress} = inputValues
   const {nameError, phoneNumberError, emailAddressError} = errorElement

  const handleUserInfo = (element, info) => {
    setInputValues((prev) => {
        return {...prev, [info]: element}
      })
      // console.log(info)
  }

  return (
     <div className="flex flex-col">
        <div className="relative mb-6">
          <input
            className="border rounded-md p-2 w-full"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => {

                handleUserInfo(e.target.value, "name",)
                setErrorElement((prev) => {
                  return {...prev, nameError: ""}
                })
            }}
          />
          <span className="text-sm text-red-400 absolute top-11 left-0">{nameError}</span>
        </div>
        <div className="relative mb-6">
          <input
            className="border rounded-md p-2 w-full"
            placeholder="Mobile Number"
            type="number"
            value={phoneNumber}
            onChange={(e) => {
                handleUserInfo(e.target.value, "phoneNumber")
                setErrorElement((prev) => {
                  return {...prev, phoneNumberError: ""}
                })
            }}
          />
          <span className="text-sm text-red-400 absolute top-11 left-0">{phoneNumberError}</span>
        </div>
        <div className="relative mb-6">
          <input
            className="border rounded-md p-2 w-full"
            placeholder="Email"
            type="email"
            value={emailAddress}
            onChange={(e) => {
                handleUserInfo(e.target.value, "emailAddress")
                setErrorElement((prev) => {
                  return {...prev, emailAddressError: ""}
                })
            }}
          />
          <span className="text-sm text-red-400 absolute top-11 left-0">{emailAddressError}</span>
        </div>
      </div>
  )
}

export default UserInfo