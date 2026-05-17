import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import { Link, useOutletContext } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import { useTheme } from "../hooks/useTheme";
import contactMeImage from "../assets/contact-me.png";
import updatedResume from "../assets/sumanth-s-s-updated-resume-2026.pdf";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [darkMode] = useTheme();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const formData = new FormData();

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY); 
    formData.append("name", data.userName);
    formData.append("email", data.userEmail);
    formData.append("message", data.userMessage);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    
    const result = await response.json();
    if (result.success) {
      toast.success("Thanks for the submission!")
      reset();
    } else {
      console.log("Error", result);
      toast.error(result.message);
    }
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <section className={`w-full ${darkMode ? "darkModeActive" : ""}`}>
      <div
        className={`w-full min-h-[calc(100vh-100px)] max-w-6xl p-4 m-auto pb-20`}
      >
        <h1 className="my-2 text-center text-2xl font-bold">Contact me</h1>
        <div>
          <p>
            I’m currently open to{" "}
            <span className="text-amber-500">Junior Frontend Developer</span>{" "}
            opportunities. Feel free to reach out through any of the channels
            below.
          </p>
          <section className="flex items-center gap-8 mt-8 flex-col md:flex-row flex-wrap">
            <div className="w-full max-w-2xl">
               <section className="getInTouchSection">
            <form
             onSubmit={handleSubmit(onSubmit)}
              className="w-6xl max-w-full mx-auto applyShadow p-8 rounded-xl bg-white text-black"
            >
              <section className="flex flex-col justify-center items-center">
                <div className="flex justify-between w-full gap-4 flex-wrap sm:flex-nowrap">
                  <div className="w-full sm:w-1/2 relative">
                    <label className="p-1" htmlFor="userName">
                      <i className="fa-solid fa-user absolute top-9 left-2"></i>
                      &nbsp;Your Name
                    </label>
                    <br />
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      className="w-full applyShadow rounded-md h-10 p-2 pl-8"
                      placeholder="Enter your full name"
                      {...register("userName", {
                        required: {
                          value: true,
                          message: "Please enter the name",
                        },
                      })}
                    />
                    {errors.userName && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.userName.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full sm:w-1/2 relative">
                    <label className="p-1" htmlFor="userEmail">
                      <i className="fa-solid fa-envelope absolute top-9 left-2"></i>
                      &nbsp;Your Email
                    </label>
                    <br />
                    <input
                      type="text"
                      id="userEmail"
                      name="userEmail"
                      className="w-full applyShadow rounded-md h-10 p-2 pl-8"
                      placeholder="Enter your email address"
                      {...register("userEmail", {
                        required: {
                          value: true,
                          message: "Please enter the email address",
                        },
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                    />
                    {errors.userEmail && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.userEmail.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full mt-5">
                  <label className="p-1" htmlFor="userMessage">
                    &nbsp;Message
                  </label>
                  <textarea
                    className="applyShadow rounded-md min-h-20  w-full p-2"
                    contentEditable={"plaintext-only"}
                    name="userMessage"
                    id="userMessage"
                    placeholder="Enter the message"
                    {...register("userMessage", {
                      required: {
                        value: true,
                        message: "Please enter the message",
                      },
                      minLength: {
                        value: 6,
                        message: "Please enter a valid message",
                      },
                    })}
                  ></textarea>
                  {errors.userMessage && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.userMessage.message}
                    </p>
                  )}
                </div>
              </section>
              <button
                className="py-2 sm:w-1/3 w-full px-10 rounded-xl font-medium cursor-pointer bg-amber-400 mt-3 applyShadow"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </section>
            </div>
            <address className="change-font-style">
              <p className="mb-1">
                <i className="fa-solid fa-file-arrow-down text-amber-500"></i>
                &nbsp;Resume:{" "}
                <Link
                  className="underline decoration-1 decoration-dotted hover:text-amber-500 decoration-amber-500"
                  to={updatedResume}
                  target="_blank"
                >
                  Download CV
                </Link>
              </p>
              <p className="mb-1">
                <i className="fa-solid fa-envelope text-[#EA4335]"></i>
                &nbsp;Email:{" "}
                <a
                  className="underline decoration-1 decoration-dotted hover:text-amber-500 decoration-amber-500"
                  href="mailto:sumanthss025@gmail.com"
                >
                  sumanthss025@gmail.com
                </a>
              </p>
              <p className="mb-1">
                <i className="fa-solid fa-phone text-green-700"></i>&nbsp;Phone
                Number:{" "}
                <a
                  className="underline decoration-1 decoration-dotted decoration-amber-500 hover:text-amber-500"
                  href="tel:8197470643"
                >
                  8197470643
                </a>
              </p>
              <p className="mb-1">
                <i className="fa-brands fa-whatsapp text-[#54EC6F]"></i>
                &nbsp;WhatsApp:{" "}
                <a
                  className="underline decoration-1 decoration-dotted hover:text-amber-500 decoration-amber-500"
                  href="https://api.whatsapp.com/send?l=en&text=Hello&phone=8197470643"
                  target="_blank"
                >
                  Please Drop a Message!
                </a>
              </p>
              <p className="mb-1">
                <i className="fa-solid fa-location-dot text-[#C72801]"></i>
                &nbsp;Location: Koramangala, Bangalore
              </p>
              <p className="mb-1">
                <i className="fa-brands fa-github"></i>&nbsp;GitHub:{" "}
                <a
                  className="underline decoration-1 decoration-dotted hover:text-amber-500 decoration-amber-500"
                  href="https://github.com/sumanth-git-hub"
                  target="_blank"
                >
                  Check My GitHub Profile
                </a>
              </p>
              <p className="mb-1">
                <i className="fa-brands fa-linkedin text-[#0B63BD]"></i>
                &nbsp;LinkedIn:{" "}
                <a
                  className="underline decoration-1 decoration-dotted hover:text-amber-500 decoration-amber-500"
                  href="https://www.linkedin.com/in/sumanth-s-s/"
                  target="_blank"
                >
                  View My LinkedIn Profile
                </a>
              </p>
              <p className="mt-1">
                <i className="fa-solid fa-clock text-amber-500"></i>
                &nbsp;Response time: Expect in few hours
              </p>
            </address>
          </section>
        </div>
      </div>
    </section>
  );
}
