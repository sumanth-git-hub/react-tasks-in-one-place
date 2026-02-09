import React, { useState } from "react";
import OtpInputComponent from "./otpElements/OtpInputComponent";

const SignUpForm = ({signAction, setSignAction}) => {

    const [viewPassword, setViewPassword] = useState("password")
    const [checkInfo, setCheckInfo] = useState(false)
    const [userMail, setUserMail] = useState("")

  const emailValidation = () => {
    if(/^\S+@\S+\.\S+$/.test(userMail)){
      return userMail
    }
    return
  }

  return (
    <div className="py-4 text-sm ">
        {
            signAction === "Sign In" ? <span></span> :<div className="flex my-2 gap-2 py-2 px-4 items-center applyShadow rounded-xl">
        <div className="md:w-1/5 w-1/2">
          <label className="mr-2">
            Full Name
          </label>
          <i className="fa-solid fa-user"></i>
        </div>
        <input
          className="w-full rounded p-2 outline-0"
          placeholder="Please Enter Full Name"
          type="text"
        />
      </div>
        }
      <div className="flex my-2 gap-2 py-2 px-4 items-center applyShadow rounded-xl relative">
        <div className="md:w-1/5 w-1/2">
          <label className="mr-2">
            Email Id
          </label>
          <i className="fa-solid fa-envelope"></i>
        </div>
        <input
          className="w-full rounded p-2 outline-0"
          type="email"
          placeholder="Enter Email ID"
          value={userMail}
          onChange={(e) => {
            emailValidation()
            setUserMail(e.target.value)}
          }
        />
        {
          signAction === "Sign Up" && <button onClick={() => {
          setCheckInfo(true)
          // ${checkInfo ? 'bg-gray-400' : 'bg-amber-400 cursor-pointer'}
        }} className={`py-2 px-4 rounded-xl font-medium md:absolute md:right-2 bg-amber-500 cursor-pointer`} disabled = {!emailValidation()} >Get&nbsp;OTP</button>
        }
       
      </div>
      { checkInfo && signAction === "Sign Up"  &&  <p className="text-sm text-green-700">Please check the OTP in your inbox of the above entered email address</p>}
      {
       checkInfo && signAction === "Sign Up"  &&     <div className="flex my-2 gap-2 py-2 px-4 items-center applyShadow rounded-xl">
        <div className="md:w-1/5 w-1/3">
          <label className="mr-2" htmlFor="enter-otp">
            Enter OTP
          </label>
          <i className="fa-solid fa-mobile-screen"></i>
        </div>
        <OtpInputComponent />
      </div>
      }
      <div className="flex my-2 gap-2 py-2 px-4 items-center applyShadow rounded-xl relative">
        <div className="md:w-1/6 w-1/2">
          <label className="mr-2">
            Password
          </label>
          <i className="fa-solid fa-user-lock"></i>
        </div>
        <input
          className="md:w-[80%] w-full rounded p-2 outline-0"
          type={`${viewPassword}`}
          placeholder="Enter Password"
        />
        <i title={`${viewPassword === "password"? 'Hide Password' : 'View Password'}`} className={`fa-solid ${viewPassword === "password"? 'fa-eye-slash' : 'fa-eye'}  absolute right-5 cursor-pointer`} onClick={() => {
            setViewPassword((prevState) => prevState === "password" ? "text" : 'password')
        }}></i>
      </div>
      {
        signAction === "Sign Up" ? <span></span> :       <p className="my-2">Lost Password? <span className="underline text-amber-500 cursor-pointer">Click here!</span></p>
      }
     <div className="submitContainer flex justify-center gap-8">
        <button onClick={() => {
            setSignAction("Sign Up")
        }} className={`${signAction === "Sign Up" ? "bg-amber-400" : "bg-gray-300"} py-2 px-10 rounded-xl font-medium cursor-pointer`}>Sign Up</button>
        <button onClick={() => {
            setSignAction("Sign In")
        }} className={`${signAction === "Sign In" ? "bg-amber-400" : "bg-gray-300"} py-2 px-10 rounded-xl font-medium cursor-pointer`}>Sign in</button>
     </div>
    </div>
  );
};

export default SignUpForm;
