import React, { useEffect, useRef, useState } from 'react'

const ToastNotifications = () => {

    const [toasts, setToasts] = useState([])
    const timerRef = useRef({})

    const handleClick = (textMessage, notificationType) => {
        let id = crypto.randomUUID()
        setToasts((prevState) => [...prevState, {message: textMessage, type: notificationType, id: id}])

        let timer;

      timer =  setTimeout(() => {
            removeNotification(id)
        }, 3000);

        timerRef.current[id] = timer
    }

    function removeNotification(elementId) {
        
        clearTimeout(timerRef.current[elementId])
        delete timerRef.current[elementId]

        setToasts((prev) => {
            const filterNotification = prev.filter((deleteElement) => {
            return deleteElement.id !== elementId
        })
        return filterNotification
        })
    }

    useEffect(() => {
     return () =>  {Object.values(timerRef.current).forEach(clearTimeout)}
    },[])

  return (
    <div className='py-4'>
        <ul className='fixed bottom-4 right-4'>
            {
                toasts.map(({id, message, type}) => {
                    return <li key={id} className={`toastNotification px-4 py-2 my-2 rounded text-black flex gap-8 justify-between items-center ${type}`}>{message}&nbsp;<i className="fa-solid fa-circle-xmark hover:text-red-700 cursor-pointer" onClick={() => {
                        removeNotification(id)
                    }}></i></li>
                })
            }
            
        </ul>
        <h3 className='mb-2 text-xl font-semibold'>Multiple Toast Notifications</h3>
        <div className='flex gap-4'>
            <button onClick={() => {
                handleClick("Successfully Completed!", "success")
            }} className='px-4 py-2 text-black rounded-xl font-semibold cursor-pointer success'>Success Notification</button>
            <button onClick={() => {
                handleClick("Something Went Wrong", "warning")
            }} className='px-4 py-2 text-black rounded-xl font-semibold cursor-pointer warning'>Warning Notification</button>
            <button onClick={() => {
                handleClick("No Information Available", "info")
            }} className='px-4 py-2 text-black rounded-xl font-semibold cursor-pointer info'>More Info Notification</button>
            <button onClick={() => {
                handleClick("Found Error!", "error")
            }} className='px-4 py-2 text-black rounded-xl font-semibold cursor-pointer error'>Error Notification</button>
        </div>
    </div>
  )
}

export default ToastNotifications