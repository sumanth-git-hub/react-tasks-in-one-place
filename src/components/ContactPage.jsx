import React, { useContext, useState } from 'react'
import {createPortal} from 'react-dom'
import Modal from './Modal'
import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext';
import { useTheme } from '../hooks/UseTheme';
import contactMeImage from '../assets/contact-me.png'

export default function ContactPage() {
 
// const {openModal, isOpenModal} = useOutletContext();

// const [darkMode] = useContext(ThemeContext)
const [darkMode] = useTheme()
// const contactImage = 'src/assets/contact-me.png'
  return (
    <section className={`w-full ${darkMode? "darkModeActive": ""}`}>
      <div className={`w-full min-h-[calc(100vh-100px)] max-w-6xl p-4 m-auto`}>
        <h2 className='my-2 text-center text-2xl font-bold'>Contact me</h2>
        <div>
          <p>I’m currently open to <span className='text-amber-500'>Junior Frontend Developer</span> opportunities. Feel free to reach out through any of the channels below.</p>
          <section className='flex items-center gap-8 mt-4 flex-col md:flex-row'>
            <div className='w-full max-w-[400px]'>
              <img className='object-cover w-full rounded-xl' src={contactMeImage} alt={"contact-section-image"} />
            </div>
          <address className='change-font-style'>
            <p className='mb-1'><i className="fa-solid fa-file-arrow-down text-amber-500"></i>&nbsp;Resume: <a className='underline decoration-1 decoration-dotted hover:text-amber-500 decoration-amber-500' href="https://drive.google.com/file/d/16XsYjvsmK6X0jIxGow0sqa-EYqmAl0RW/view" target='_blank'>Download CV</a></p>
            <p className='mb-1'><i className="fa-solid fa-envelope text-[#EA4335]"></i>&nbsp;Email: <a className='underline decoration-1 decoration-dotted hover:text-amber-500 decoration-amber-500' href="mailto:sumanthss025@gmail.com">sumanthss025@gmail.com</a></p>
            <p className='mb-1'><i className="fa-solid fa-phone text-green-700"></i>&nbsp;Phone Number: <a className='underline decoration-1 decoration-dotted decoration-amber-500 hover:text-amber-500' href="tel:8197470643">8197470643</a></p>
            <p className='mb-1'><i className="fa-brands fa-whatsapp text-[#54EC6F]"></i>&nbsp;WhatsApp: <a className='underline decoration-1 decoration-dotted hover:text-amber-500 decoration-amber-500' href="https://api.whatsapp.com/send?l=en&text=Hello&phone=8197470643" target='_blank'>Please Drop a Message!</a></p>
            <p className='mb-1'><i className="fa-solid fa-location-dot text-[#C72801]"></i>&nbsp;Location: Koramangala, Bangalore</p>
            <p className='mb-1'><i className="fa-brands fa-github"></i>&nbsp;GitHub: <a className='underline decoration-1 decoration-dotted hover:text-amber-500 decoration-amber-500' href="https://github.com/sumanth-git-hub" target='_blank'>Check My GitHub Profile</a></p>
            <p className='mb-1'><i className="fa-brands fa-linkedin text-[#0B63BD]"></i>&nbsp;LinkedIn: <a className='underline decoration-1 decoration-dotted hover:text-amber-500 decoration-amber-500' href="https://www.linkedin.com/in/sumanth-s-s/" target='_blank'>View My LinkedIn Profile</a></p>
            <p className='mt-1'><i className="fa-solid fa-clock text-amber-500"></i>&nbsp;Response time: Within 10 Minutes</p>
          </address>
          </section>
        </div>
      {/* <button onClick={() => {
        isOpenModal("contactPage")
      }} className='cursor-pointer text-black bg-amber-400 px-4 py-1 rounded-xl my-4'> <i className="fa-solid fa-headset"></i>&nbsp;&nbsp;Connect with us</button>
      <Modal openModal={openModal === "contactPage"} isOpenModal={() => isOpenModal(null)} passHeading={`How Can we Help You!`} bottomLine={`Thanks for reaching out hope your issue is resolved!`} Children={
        <div className='flex flex-wrap gap-4 justify-between py-4'>
        <p><i className="fa-solid fa-phone"></i>&nbsp;Call Us: <span><a className='text-amber-500' href="tel:7348988867">7348988867</a></span></p>
          <p><i className="fa-solid fa-comments"></i>&nbsp;Chat with us in Whatsapp: <span><a className='text-amber-500'  href="https://api.whatsapp.com/send?l=en&text=Hi&phone=8197470643" target='_blank'>8197470643</a></span></p>
        </div>
      }/> */}
    </div>
    </section>
  )
}
