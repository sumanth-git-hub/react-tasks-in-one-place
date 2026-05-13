import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    // const [userInformation, setUserInformation] = useState(null)
    const [userInformation, setUserInformation] = useState(localStorage.getItem("addUserName") ? {userName: localStorage.getItem("addUserName")} : null)

    function signUp(userName, emailId, password) {
        // const userArray = []
        const userArray = JSON.parse(localStorage.getItem("userInfo")) || []

        if(userArray.find((user) => user.emailId === emailId)){
            return {success: false, error: "Email already exist!"}
        }

        const newUser = {userName, emailId, password}
        userArray.push(newUser)
        localStorage.setItem("userInfo", JSON.stringify(userArray))
        setUserInformation({userName})
        localStorage.setItem("addUserName", userName)
        return {success: true}
    }
    function login(emailId, password){
        const userArray = JSON.parse(localStorage.getItem("userInfo")) || []
        const logUser = userArray.find((user) => user.emailId === emailId && user.password === password)
        if(!logUser){
            return {success: false, error: "Invalid email or password!"}
        }
        // const needName = userArray.filter((u) => u.emailId === emailId)[0]?.userName
        localStorage.setItem("addUserName", logUser.userName)
        setUserInformation({userName: logUser.userName})

        return {success: true}
    }

    function logOut(){
        localStorage.removeItem("addUserName")
        setUserInformation(null)
    }

    return (
            <AuthContext.Provider value={{userInformation, signUp, logOut, login}}>
                {children}
            </AuthContext.Provider>
    )
}

//created the custom hook to pass the data
export const useAuth = () => {
    const context = useContext(AuthContext)

    return context
}