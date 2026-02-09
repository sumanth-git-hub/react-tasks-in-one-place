import React from "react";
import { createPortal } from "react-dom";

const TermModal = ({showTermsModal, setShowTermsModal, setInputValues}) => {

  const closeModal = () => {
    setShowTermsModal(!showTermsModal)
  }
  return (
    createPortal(
        <div className={`fixed flex items-center px-4 justify-center inset-0 bg-black/40 ${showTermsModal? "block" : 'hidden'}`}>
      <div className="rounded-lg grow max-w-2xl bg-white p-6 shadow-lg">
        <div className="w-full text-center relative">
          <i
            className="fa-solid fa-circle-xmark absolute top-0 right-0 hover:text-red-500 cursor-pointer"
            aria-hidden="true"
            onClick={() => {
              closeModal()
            }}
          ></i>
          {/* <i
            className="fa-solid fa-envelope text-amber-500 text-8xl mb-4"
            aria-hidden="true"
          ></i> */}
          <p className="font-bold text-lg text-left mb-4">Terms and Conditions</p>
          <hr className="text-gray-300 mb-2"/>
          <div className="h-96 scroll-auto overflow-auto">
            <ul className="text-left text-sm style-lists">
            <li className="mb-2">I/We, hereby declare that the statements and particulars given in this Proposal form are complete, true and accurate and I/We agree that the Insurance company will not be liable under the insurance contract if it is found that any of my/our statements or particulars or declarations in this proposal form or other documents are incorrect /misleading /Fraudulent in any respect on any matter to the grant of a cover or submission of claim in future.</li>
            <li className="mb-2">I declare that the premium paid under this transaction to Go Digit General Insurance Limited is being paid by me i.e. the proposer/policyholder through a bank account or a Credit/Debit Card or a Prepaid Payment Instrument or a UPI wallet (Wallet), held by me in my name as a primary holder (referred to as “source account”). I confirm that it is not a third party payment made by any other person on my behalf. I understand that in the event of a policy cancellation, the refund of premium as per policy terms and conditions may be credited back to such source account and such electronic transfer will constitute full and final discharge of the Company’s obligation.</li>
            <li className="mb-2">I/We further declare that l/we will notify in writing any change in the details so furnished hereinabove occurring after the proposal has been submitted but before communication of the risk acceptance by the Company.</li>
            <li className="mb-2">
              I/We authorize the Company to share information pertaining to my proposal including medical records for the sole purpose of proposal underwriting and/or claims settlement and with any Governmental and/or Regulatory authority.
            </li>
            <li className="mb-2">
              By submitting my contact number and/or email ID, I authorize Go Digit General Insurance (Digit Insurance) to call, send email/SMS/WhatsApp and offer information and services about its product(s) and/or assist me for completing any incomplete journey/transaction. I further acknowledge and agree that such authorization will be over and above any registration of my contact number on TRAI’s NDNC registry.
            </li>
          </ul>
          </div>
          <hr className="text-gray-300"/>
          <div className="flex items-center justify-end">
            <button className="font-bold bg-[#fa0] rounded-sm p-2 px-8 mt-8 cursor-pointer" onClick={() => {
              closeModal()
              setInputValues((prev) => {
                return {...prev, acceptTheTerms: "accept"}
              })
            }}>I Agree</button>
          </div>
        </div>
      </div>
    </div>, document.querySelector('#portal')
    )
  );
};

export default TermModal;
