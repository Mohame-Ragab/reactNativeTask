import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
export const userContext = createContext();
const UserContextProvider = ({children}) => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        axios.get("http://jsonplaceholder.typicode.com/users").
        then(res=>setUsers(res.data))
    },[])
  return (
    <userContext.Provider value={{users}} >
        {children}

    </userContext.Provider>
  )
}

export default UserContextProvider

const styles = StyleSheet.create({})