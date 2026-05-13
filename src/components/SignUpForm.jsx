import React, { useContext, useState } from "react";
import OtpInputComponent from "./otpElements/OtpInputComponent";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const SignUpForm = ({ signAction, setSignAction, isOpenModal }) => {
  const {userInformation, signUp, login, logOut} = useAuth()
  const [authError, setAuthError] = useState(null)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [viewPassword, setViewPassword] = useState("password");
  const navigate = useNavigate()

  function fetchFormData(data){
       
    setAuthError(null)
    let results;
    if(signAction === "Sign Up"){
       results = signUp(data.fullName, data.userEmail, data.userPassword)
    }
    else {
     results =  login(data.userEmail, data.userPassword)
    }

    if(results.success){
      alert("Login Successfully")
      navigate("/") 
      isOpenModal()
    }
    else {
      setAuthError(results.error)
    }
    // console.log(results)
  }
  return (
    <form onSubmit={handleSubmit(fetchFormData)}>
      {authError && <p className="text-center bg-red-300 p-1 rounded-md mt-2">{authError}</p>}
      <div className= {`py-4 text-sm`}>
      {signAction === "Sign In" ? (
        <span></span>
      ) : (
        <div>
          <div className="flex my-2 gap-2 py-2 px-4 items-center applyShadow rounded-xl">
          <div className="md:w-1/5 w-1/2">
            <label className="mr-2" htmlFor="fullName">Full Name</label>
            <i className="fa-solid fa-user"></i>
          </div>
          <input
          id="full-name"
            className="w-full rounded p-2 outline-0"
            placeholder="Please Enter Full Name"
            type="text"
            {...register("fullName", {required: {value: true, message: "Please enter the full name"}})}
          />
        </div>
      {errors.fullName && <span className="text-xs text-red-500">{errors.fullName.message}</span>}
        </div>
      )}
      <div className="flex my-2 gap-2 py-2 px-4 items-center applyShadow rounded-xl relative">
        <div className="md:w-1/5 w-1/2">
          <label className="mr-2">Email Id</label>
          <i className="fa-solid fa-envelope"></i>
        </div>
        <input
          className="w-full rounded p-2 outline-0"
          type="email"
          placeholder="Enter Email ID"
          {...register("userEmail", {required: {value: true, message: "Please enter a email address"}, pattern: {value: /^\S+@\S+\.\S+$/, message: "Enter a valid email address"}})}
        />
        
      </div>
      {errors.userEmail && <span className="text-xs text-red-500">{errors.userEmail.message}</span>}
      <div className="flex my-2 gap-2 py-2 px-4 items-center applyShadow rounded-xl relative">
        <div className="md:w-1/6 w-1/2">
          <label className="mr-2">Password</label>
          <i className="fa-solid fa-user-lock"></i>
        </div>
        <input
          className="md:w-[80%] w-full rounded p-2 outline-0"
          type={`${viewPassword}`}
          placeholder="Enter Password"
          {...register("userPassword", {required: {value: true, message: "Enter the password"}, minLength: {value: 6, message: "Password must be more than 6 character"}})}
        />
        <i
          title={`${viewPassword === "password" ? "Hide Password" : "View Password"}`}
          className={`fa-solid ${viewPassword === "password" ? "fa-eye-slash" : "fa-eye"}  absolute right-5 cursor-pointer`}
          onClick={() => {
            setViewPassword((prevState) =>
              prevState === "password" ? "text" : "password",
            );
          }}
        ></i>
      </div>
              {errors.userPassword && <span className="text-xs text-red-500">{errors.userPassword.message}</span>}
      {signAction === "Sign Up" ? (
        <p className="my-2">
          Already have an account?{" "}
          <span
            className="underline text-amber-500 cursor-pointer px-1"
            onClick={() => {
              setSignAction("Sign In");
              setAuthError(null)
            }}
          >
            Login
          </span>
        </p>
      ) : (
        <p className="my-2">
          Don't have an account?
          <span
            className="underline text-amber-500 cursor-pointer px-1"
            onClick={() => {
              setSignAction("Sign Up");
              setAuthError(null)
            }}
          >
            Sign Up
          </span>
        </p>
      )}
      <div className="submitContainer flex justify-center gap-8">
        <button type="submit"
          className={`${signAction === "Sign Up" ? "bg-amber-400" : "hidden"} py-2 md:w-1/3 w-full px-10 rounded-xl font-medium cursor-pointer`}
         >
          Sign Up
        </button>
        <button type="submit"
          className={`${signAction === "Sign In" ? "bg-amber-400" : "hidden"} py-2 md:w-1/3 w-full px-10 rounded-xl font-medium cursor-pointer`}
          
        >
          Sign in
        </button>
      </div>
    </div>
    </form>
  );
};

export default SignUpForm;
