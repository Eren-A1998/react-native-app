import React,{createContext,useState} from 'react';
import { useReducer } from 'react';
import {usersReducer} from '../reducers/users'


export const context = createContext()
context.displayName = "Students";

const StudentsProvider =  ({children})=>{
    const[state,dispatch] = useReducer(usersReducer,{})
    return <context.Provider value={{state,dispatch}}>
        {children}
     </context.Provider>
}
export default StudentsProvider

//  let [state,setState] = useState([1,2,3])

//  const addStudent = (student)=>
//  {
//      setState([...state,student])
//  }