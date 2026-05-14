import React, { Children } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({openModal,isOpenModal,passHeading, bottomLine,Children}) {  

function closeModal() {
  isOpenModal(null)
}


  return (
    createPortal(<section onClick={() => {
          closeModal()
        }} className={`fixed flex items-center justify-center inset-0 bg-black/40 px-2 ${openModal ? 'visible': 'invisible'}`}>
        <div onClick={(e) => {
          e.stopPropagation()
        }} className='relative bg-gray-200 p-4 rounded-2xl w-full max-w-2xl m-auto shadow'>
        <i className="fa-solid fa-circle-xmark absolute right-4 cursor-pointer hover:text-red-500 transition duration-500 ease-in-out" onClick={() => {
          closeModal()
        }}></i>
        <p className='py-4'>{passHeading}</p><hr/>
        <div> {
            Children
            }
         
        </div><hr/>
        <p className='py-4 flex justify-between items-center'>{bottomLine} <span className='cursor-pointer bg-amber-400 px-4 py-1 rounded-xl' onClick={() => {
          closeModal()
        }}>close</span></p>
      </div>
      </section>,
      document.getElementById('portal'))
  )
}
