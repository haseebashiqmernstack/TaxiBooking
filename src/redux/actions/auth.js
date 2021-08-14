import axios from "axios"
import apiService from "../../apis/api"
import { authConstant, Signup } from "../actiontypes/constants"

export const login=(user)=>{
    return async (dispatch) => {
        dispatch({
            type:authConstant.LOGIN_REQUEST,payload:''
        })
        const userData= await apiService.Login(user)
        if(userData!=null)
        {  
           dispatch({
               type:authConstant.LOGIN_SUCCESS,payload:userData
           })
        }
        else{
            dispatch({
                type:authConstant.LOGIN_FAIL,payload:''
            })
        }
       }
}

// SIGNUP START

export const signup=(user)=>{
return async (disptach)=>{
    disptach({
        type:Signup.SINGUP_REQUEST,
        payload:''
    })
   const res=await apiService.Signup(user);
   console.log(res);
   if(res.status===201)
   {
       disptach({
           type:Signup.SINGUP_SUCCESS,
           payload:res
       })
   }
   else{
       if(res.status===400){
           console.log(res);
    disptach({
        type:Signup.SINGUP_FAIL,
        payload:res.message
    })
}
   }
}
}

// SIGNUP END