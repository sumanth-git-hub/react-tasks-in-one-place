import React, { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import MultiStepComponent from "./MultiStepComponent";
import CompanyInfo from "./CompanyInfo";
import IndustryInfo from "./IndustryInfo";
import UserInfo from "./UserInfo";
import StepperComponent from "./StepperComponent";
import TermModal from "./termModal";
import ThanksModal from "./thanksModal";
import AccordionCom from "./AccordionCom";

const BusinessInsurance = () => {
  const [darkMode] = useTheme();
  const initialInputValues = {
    name: "",
    phoneNumber: "",
    emailAddress: "",
    companyName: "",
    pinCode: "",
    numberOfEmp: "",
    industryCategory: "",
    sumInsured: "",
    registeredInIndia: "Yes",
    acceptTheTerms: "accept",
  };
  const [inputValues, setInputValues] = useState(initialInputValues);
  const [errorElement, setErrorElement] = useState({
    // nameError: 'Please enter full name',
    // phoneNumberError: 'Please enter the valid mobile number',
    // emailAddressError: 'Please enter the valid email address'
  });
  const newSteps = [
    {
      componentId: 0,
      componentName: "User information",
      component: UserInfo,
      addValidation: () => {
        const validatePhoneNumberRegex = /^\+?[1-9][0-9]{7,14}$/;
        const validationEmailAddressRegex = /^\S+@\S+\.\S+$/;
        const errorObject = {};
        if (inputValues.name.length < 3 || !inputValues.name) {
          errorObject.nameError = "Please enter your full name";
        }
        if (
          !inputValues.phoneNumber ||
          !validatePhoneNumberRegex.test(inputValues.phoneNumber)
        ) {
          errorObject.phoneNumberError = "Please enter the valid phone number";
        }
        if (
          !inputValues.emailAddress ||
          !validationEmailAddressRegex.test(inputValues.emailAddress)
        ) {
          errorObject.emailAddressError =
            "Please enter the valid email address";
        }
        setErrorElement(errorObject);
        return errorObject.nameError ||
          errorObject.phoneNumberError ||
          errorObject.emailAddressError
          ? false
          : true;
      },
    },
    {
      componentId: 1,
      componentName: "Company information",
      component: CompanyInfo,
      addValidation: () => {
        const errorObject = {};
        if (!inputValues.companyName) {
          errorObject.companyNameError = "Please enter the company name";
        }
        if (!inputValues.pinCode) {
          errorObject.pinCodeError = "Please enter the pin code";
        }
        if (!inputValues.numberOfEmp) {
          errorObject.numberOfEmpError = "Please enter the employees count";
        }
        setErrorElement(errorObject);
        return errorObject.companyNameError ||
          errorObject.pinCodeError ||
          errorObject.numberOfEmpError
          ? false
          : true;
      },
    },
    {
      componentId: 2,
      componentName: "Industry information",
      component: IndustryInfo,
      addValidation: () => {
        const errorObject = {};
        if (!inputValues.industryCategory) {
          errorObject.industryCategoryError = "Please select the industry";
        }
        if (!inputValues.sumInsured) {
          errorObject.sumInsuredError = "Please enter the sum insured";
        }
        setErrorElement(errorObject);
        return errorObject.industryCategoryError || errorObject.sumInsuredError
          ? false
          : true;
      },
    },
  ];

  const [formCount, setFormCount] = useState(0);
  let ActiveComponent = newSteps[formCount].component;
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showThanksModal, setShowThanksModal] = useState(false);
  // console.log(showTermsModal)

  const handleNext = () => {
    const isValid = newSteps[formCount].addValidation();
    if (
      isValid &&
      formCount < newSteps.length - 1 &&
      inputValues.acceptTheTerms === "accept"
    ) {
      // setErrorElement({})
      setFormCount((prev) => prev + 1);
    } else if (
      formCount === newSteps.length - 1 &&
      inputValues.acceptTheTerms === "accept"
    ) {
      console.log(inputValues);
      setShowThanksModal(true);
      setInputValues(initialInputValues);
      setErrorElement({});
      setFormCount(0);
    }
  };
  const handlePrev = () => {
    if (formCount > 0) {
      setFormCount((prev) => prev - 1);
    }
  };

  return (
    <section className={`w-full ${darkMode ? "darkModeActive" : ""}`}>
      <div className={`w-full max-w-6xl p-4 m-auto min-h-[calc(100vh-100px)]`}>
        <h1 className="font-bold text-2xl text-center my-4">
          Multi Step Form with Stepper Component in{" "}
          <span className="text-sky-400">React</span>&nbsp;
          <i className="fa-regular fa-rectangle-list text-amber-500"></i>
        </h1>
        <div className="justify-center mx-auto items-start gap-10 mt-6 md:flex">
          <StepperComponent
            formCount={formCount}
            setFormCount={setFormCount}
            newSteps={newSteps}
          />
          {/* <MultiStepComponent
          errorElement={errorElement}
          setErrorElement={setErrorElement}
          newSteps={newSteps}
          inputValues={inputValues}
          setInputValues={setInputValues}
        /> */}
          <div className=" bg-gray-100 p-8 h-fit rounded-md add-shadow w-full text-black md:w-1/2">
            <p className="bg-sky-200 p-2 mb-2 text-center font-semi-bold">
              Business Insurance is{" "}
              <span className="text-green-600 font-semi-bold">
                Just 3 Steps Away!
              </span>
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
                      ...prev,
                      acceptTheTerms: e.target.checked
                        ? e.target.name
                        : e.target.checked,
                    };
                  });
                }}
              />
              &nbsp;
              <label htmlFor="accept">
                I agree to the{" "}
                <span
                  className="test-underline underline decoration-dotted decoration-2 cursor-pointer"
                  onClick={() => {
                    setShowTermsModal(!showTermsModal);
                  }}
                >
                  Terms &amp; Conditions
                </span>
              </label>
              <span className="text-sm text-red-400 absolute top-6 left-0">
                {inputValues.acceptTheTerms === "accept"
                  ? ""
                  : "Please Accept the terms & condition"}
              </span>
              <TermModal
                showTermsModal={showTermsModal}
                setShowTermsModal={setShowTermsModal}
                setInputValues={setInputValues}
              />
              <ThanksModal
                showThanksModal={showThanksModal}
                setShowThanksModal={setShowThanksModal}
              />
            </p>
          </div>
        </div>
        <AccordionCom />
      </div>
    </section>
  );
};

export default BusinessInsurance;
