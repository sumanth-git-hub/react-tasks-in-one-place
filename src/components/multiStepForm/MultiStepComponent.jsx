import React, { useState } from "react";
import TermModal from "./TermModal";
// import Steps from "./Steps";

const MultiStepComponent = ({
  newSteps,
  inputValues,
  setInputValues,
  errorElement,
  setErrorElement,
}) => {
  const [formCount, setFormCount] = useState(0);
  let ActiveComponent = newSteps[formCount].component;
  const [showTermsModal, setShowTermsModal] = useState(false)
  console.log(showTermsModal)

  const handleNext = () => {
    const isValid = newSteps[formCount].addValidation();
    if (isValid && formCount < newSteps.length - 1 && inputValues.acceptTheTerms === "accept") {
      // setErrorElement({})
      setFormCount((prev) => prev + 1);
    } else if (formCount === newSteps.length - 1 && inputValues.acceptTheTerms === "accept") {
      console.log(inputValues);
    }
  };
  const handlePrev = () => {
    if (formCount > 0) {
      setFormCount((prev) => prev - 1);
    }
  };
  return (
    <div className=" bg-gray-100 p-8 h-fit rounded-md add-shadow w-1/2 text-black">
      <p className="bg-sky-200 p-2 mb-2 text-center">
        Zero Paperwork. <span className="text-green-600">Online Process</span>
      </p>
      <div className="flex my-4 items-center justify-between">
        <i
          className="fa-solid fa-left-long cursor-pointer"
          aria-hidden="true"
          onClick={() => {
            handlePrev();
          }}
        ></i>
        <p>
          Steps <span className="text-[#fa0]">{formCount + 1}</span> of 3
        </p>
      </div>

      {
        <ActiveComponent
          errorElement={errorElement}
          setErrorElement={setErrorElement}
          inputValues={inputValues}
          setInputValues={setInputValues}
        />
      }

      <button
        className="font-bold bg-[#fa0] w-full rounded-sm p-2 my-8 cursor-pointer"
        onClick={() => {
          handleNext();
        }}
      >
        {formCount === newSteps.length - 1 ? "Get Quote" : "Next"}
      </button>
      <p className="relative">
        <input
          className="cursor-pointer"
          id="accept"
          type="checkbox"
          checked={inputValues.acceptTheTerms === "accept"}
          name={"accept"}
          onChange={(e) => {
            setInputValues((prev) => {
              // console.log(e.target.checked);
              return {
                ...prev, acceptTheTerms: e.target.checked? e.target.name: e.target.checked,
              };
            });
          }}
        />
        &nbsp;
        <label htmlFor="accept">I agree to the <span className="test-underline underline decoration-dotted decoration-2 cursor-pointer" onClick={() => {
          setShowTermsModal(!showTermsModal)
        }}>Terms &amp; Conditions</span></label>
        <span className="text-sm text-red-400 absolute top-6 left-0">{inputValues.acceptTheTerms === "accept" ? "" : "Please Accept the terms & condition"}</span>
      <TermModal showTermsModal={showTermsModal}  setShowTermsModal = {setShowTermsModal} setInputValues = {setInputValues}/>
      </p>
    </div>
  );
};

export default MultiStepComponent;
