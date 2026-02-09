import React, { useState } from "react";

const CompanyInfo = ({inputValues, setInputValues, errorElement, setErrorElement}) => {
  const {companyName, pinCode, numberOfEmp} = inputValues

  const handleCompanyDetails = (element, info) => {

    setInputValues((prev) => {
      return {...prev, [info]: element}
    })
  }

  return (
    <div className="flex flex-col">
      <div className="relative mb-6">
        <input
          className="border rounded-md p-2 w-full"
          placeholder="Company Name"
          type="text"
          value={companyName}
          onChange={(e) => {
            handleCompanyDetails(e.target.value, "companyName")

            setErrorElement((prev) => {
              return {...prev, companyNameError: ""}
            })
          }}
        />
        <span className="text-sm text-red-400 absolute top-11 left-0">{errorElement.companyNameError}</span>
      </div>
      <div className="relative mb-6">
        <input
          className="border rounded-md p-2 w-full"
          placeholder="Pin code"
          type="number"
          value={pinCode}
          onChange={(e) => {
            handleCompanyDetails(e.target.value, "pinCode")
            setErrorElement((prev) => {
              return {...prev, pinCodeError: ""}
            })
          }}
        />
        <span className="text-sm text-red-400 absolute top-11 left-0">{errorElement.pinCodeError}</span>
      </div>
      <div className="relative mb-6">
        <input
          className="border rounded-md p-2 w-full"
          placeholder="No of Employee"
          type="number"
          value={numberOfEmp}
           onChange={(e) => {
            handleCompanyDetails(e.target.value, "numberOfEmp")
            setErrorElement((prev) => {
              return {...prev, numberOfEmpError: ""}
            })
          }}
        />
        <span className="text-sm text-red-400 absolute top-11 left-0">{errorElement.numberOfEmpError}</span>
      </div>
    </div>
  );
};

export default CompanyInfo;
