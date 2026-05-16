import React, { useState } from 'react'
import { createPortal } from 'react-dom'

export const VideoComponent = ({displayVideoModal, setDisplayVideoModal, children}) => {
    function closeDisplayVideoModal() {
      setDisplayVideoModal(!displayVideoModal)  
    }
  return (
       createPortal( <div className={`fixed flex items-center px-4 justify-center inset-0 bg-black/40 ${displayVideoModal ? 'block': 'hidden'}`}>
          <div className="rounded-lg grow max-w-2xl bg-white p-4 shadow-lg">
            <div className="w-full text-center p-8 relative">
              <i
                className="fa-solid fa-circle-xmark absolute top-0 right-0 hover:text-red-500 cursor-pointer"
                aria-hidden="true" onClick={() => {
                    closeDisplayVideoModal()
                }}
              ></i>
                    {children}
            </div>
          </div>
        </div>, document.getElementById('portal'))
      );
}
