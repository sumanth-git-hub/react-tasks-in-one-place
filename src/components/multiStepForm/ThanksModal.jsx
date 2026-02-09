import React from "react";
import { createPortal } from "react-dom";

const ThanksModal = ({showThanksModal, setShowThanksModal}) => {

    const closeThanksModal = () => {
        setShowThanksModal(!showThanksModal)
    }
  return (
   createPortal( <div className={`fixed flex items-center px-4 justify-center inset-0 bg-black/40 ${showThanksModal ? 'block': 'hidden'}`}>
      <div className="rounded-lg grow max-w-2xl bg-white p-4 shadow-lg">
        <div className="w-full text-center p-8 relative">
          <i
            className="fa-solid fa-circle-xmark absolute top-0 right-0 hover:text-red-500 cursor-pointer"
            aria-hidden="true" onClick={() => {
                closeThanksModal()
            }}
          ></i>
          <i
            className="fa-solid fa-envelope text-amber-500 text-8xl mb-4"
            aria-hidden="true"
          ></i>
          <p>
            Thank you for sharing your details with us, Our team will reach you
            out soon!
          </p>
        </div>
      </div>
    </div>, document.getElementById('portal'))
  );
};

export default ThanksModal;
