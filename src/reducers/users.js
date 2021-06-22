export const usersReducer = (state = {},action)=>{
    console.log(action)
    switch (action.type){
        case 'USERS_LIST':{
            return {...state,list:action.payload}
        }

        case 'USER_DETAILS':{
            return {...state,details:action.payload}
        }

        case 'createUser':{
            return {...state,details:action.payload}
        }
    }
     return state;
}