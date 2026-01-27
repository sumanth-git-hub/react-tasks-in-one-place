import React, { useContext, useState } from 'react'
import {createPortal} from 'react-dom'
import Modal from './Modal'
import { useOutletContext } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext';
import { useTheme } from '../hooks/UseTheme';

export default function ContactPage() {
 
const {openModal, isOpenModal} = useOutletContext();

// const [darkMode] = useContext(ThemeContext)
const [darkMode] = useTheme()

  return (
    <section className={`w-full ${darkMode? "darkModeActive": ""}`}>
      <div className={`w-full min-h-[calc(100vh-100px)] max-w-6xl p-4 m-auto`}>
      <p>Contact Us</p>
      <button onClick={() => {
        isOpenModal("contactPage")
      }} className='cursor-pointer text-black bg-amber-400 px-4 py-1 rounded-xl my-4'> <i className="fa-solid fa-headset"></i>&nbsp;&nbsp;Connect with us</button>
      <Modal openModal={openModal === "contactPage"} isOpenModal={() => isOpenModal(null)} passHeading={`How Can we Help You!`} bottomLine={`Thanks for reaching out hope your issue is resolved!`} Children={
        <div className='flex flex-wrap gap-4 justify-between py-4'>
        <p><i className="fa-solid fa-phone"></i>&nbsp;Call Us: <span><a className='text-amber-500' href="tel:7348988867">7348988867</a></span></p>
          <p><i className="fa-solid fa-comments"></i>&nbsp;Chat with us in Whatsapp: <span><a className='text-amber-500'  href="https://api.whatsapp.com/send?l=en&text=Hi&phone=8197470643" target='_blank'>8197470643</a></span></p>
        </div>
      }/>
      {/* {
        createPortal(<section onClick={() => {
          closeModal()
        }} className={`fixed flex items-center justify-center inset-0 bg-black/40 px-2 ${openModal ? 'visible': 'invisible'}`}>
        <div onClick={(e) => {
          e.stopPropagation()
        }} className='relative bg-gray-200 p-4 rounded-2xl w-full max-w-2xl m-auto shadow'>
        <i className="fa-solid fa-circle-xmark absolute right-4 cursor-pointer hover:text-red-500 transition duration-500 ease-in-out" onClick={() => {
          closeModal()
        }}></i>
        <p className='py-4'>How Can we help You</p><hr/>
        <div className='flex gap-4 justify-between py-4'>
          <p>Call Us: <span><a className='text-amber-500' href="tel:7348988867">7348988867</a></span></p>
          <p>Chat with us in Whatsapp: <span><a className='text-amber-500'  href="https://api.whatsapp.com/send?l=en&text=Hi&phone=8197470643" target='_blank'>8197470643</a></span></p>
        </div><hr/>
        <p className='py-4 flex justify-between items-center'>Thanks for reaching out hope your issue is resolved! <span className='cursor-pointer bg-amber-400 px-4 py-1 rounded-xl' onClick={() => {
          closeModal()
        }}>close</span></p>
      </div>
      </section>,
      document.getElementById('portal')
      )
      } */}
    </div>
    </section>
  )
}
