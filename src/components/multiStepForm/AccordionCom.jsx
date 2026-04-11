import React, { useState } from 'react'

const AccordionCom = () => {
    // const [openAccordion, isOpenAccordion] = useState(0)
    const [openAccordion, isOpenAccordion] = useState([])
    
    const actionOnAccordion = (indexAcc) => {

        isOpenAccordion((prev) => {
            return prev.includes(indexAcc) ? prev.filter((findValue) => indexAcc !== findValue) : [...prev, indexAcc]
        })
        // isOpenAccordion(indexAcc === openAccordion ? null : indexAcc)
        // console.log(openAccordion, "accord values")
        //     console.log(indexAcc, "index value")

    }

    const accordionData = [
        {
            questionNo: 1,
            question: "Product Information",
            answerForQuery: "Update the above mentioned details in the 3 steps form and expect the call from our team within the 10 minutes of time span even in weekends and public holidays too, we always here to make you understand the policy coverage and make you choose the best plan that fits your needs!"
        },
        {
            questionNo: 2,
            question: "Product Disclaimer",
            answerForQuery: "Please read the policy document carefully before making the purchase decision, make sure you got the better clarity on the inclusions and exclusions part then take a next step, or get in touch with our team and get the detailed understanding of policy as a summarized context."
        }
    ]

    // console.log(accordionData)
  return (
    <div>
        {
            accordionData.map((item, index) => {
                return (
                    <div key={index} className="p-4 border-amber-500 border-1 m-4 rounded-xl add-shadow">
                        <h3 className="flex items-center justify-between cursor-pointer hover:text-amber-500" onClick={() => {
                            actionOnAccordion(index + 1)
                        }}>{item.question}<i className={`fa-solid fa-angle-down ${openAccordion.includes(index + 1)  ? 'fa-angle-up': 'fa-angle-down'}`} aria-hidden="true"></i></h3>
                        {
                            // openAccordion === index + 1 && <p className="p-2 text-sm">{item.answerForQuery}</p>
                            openAccordion.includes(index + 1) && <p className="p-2 text-sm">{item.answerForQuery}</p>
                        }
                        </div>
                )
            })
        }
    </div>
  )
}

export default AccordionCom