import apiService from "../../apis/api"
import { allServices } from "../actiontypes/constants"

export const GetAllSerivces=()=>{
    return async (dispatch)=>{
        dispatch({
            type:allServices.SERVICE_REQUEST,
            payload:''
        })
        const ser=await apiService.Service();
        console.log(ser)
        if(ser!=null)
        {
            dispatch({
                type:allServices.SERVICE_SUCCESS,
                payload:ser
            })
        }
        else{
            dispatch({
                type:allServices.SERVICE_FAIL,
                payload:''
            })
        }
    }
}