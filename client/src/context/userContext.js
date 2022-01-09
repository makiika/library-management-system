import React,{ createContext,useState,useEffect } from "react"
import axios from 'axios'

export const userContext = createContext()

const UserContextProvider = ({children}) => {
    const [users,setUsers] = useState([])
    const [studentId,setStudentId] = useState('')

    const getUsers = ()=>{
        axios.get('http://localhost:3002/student/getStudents').then(({data})=>{
            setUsers(data)
        })
    }

    useEffect(()=>{
        getUsers()
      
    },[])
    
    return (
        <userContext.Provider value={{users,studentId,setStudentId,setUsers}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider
