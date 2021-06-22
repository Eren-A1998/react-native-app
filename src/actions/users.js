import { Body } from "native-base";

const baseURL = "https://reqres.in/api/users";
export const getUsers = async (params)=>{
    let payload = null;
    try{
        const response = await fetch(`${baseURL}?page=${params}`)
        payload = await response.json()
        
    }
    catch(err){
        console.log((err))
    }

    return {
        type:'USERS_LIST',
        payload:payload.data
    }
}  


export const getUserByID = async (id)=>{
    let payload = null;
    try{
        const response = await fetch(`${baseURL}/${id}`)
        payload = await response.json()
        
    }
    catch(err){
        console.log((err))
    }

    return {
        type:'USER_DETAILS',
        payload:payload.data
    }
}  


export const AddUser = async (nm,job)=>{
    let payload = null;
    try{
        const response = await fetch(`${baseURL}`,
        {
            method:"post", 
            headers:{'Content-Type': 'application/json',  Accept: 'application/json'},
            body:JSON.stringify({name:nm,job:job})
        }
        )
        payload = await response.json()
        
    }
    catch(err){
        console.log((err))
    }

    return {
        type:'createUser',
        payload:payload
    }
} 
