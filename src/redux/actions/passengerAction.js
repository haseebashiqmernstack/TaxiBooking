import apiService from "../../apis/api"
import { allServices, Passenger } from "../actiontypes/constants"

export const RegisterPassenger=(passengerData)=>{
     return async (dispatch)=>{
         dispatch({
             type:Passenger.PASSENGER_REQUEST,
             payload:''
         })
         const passengerList=await apiService.registerRiders(passengerData);
          if(passengerList!=null)
          {
              dispatch({
                  type:Passenger.PASSENGER_SUCCESS,
                  payload:passengerData.riders,
              })
          }        
          else{
              dispatch({
                  type:Passenger.PASSENGER_FAILIURE,
                  payload:'Not saved'
              })
          }
     }
}

export const ShowPassenger=()=>{
    return async (dispatch)=>{
        dispatch({
            type:Passenger.SHOW_PASSENGER_LIST,
            payload:''
        })
        const plist=await apiService.getRiders();
        if(plist!=null)
        {
            dispatch({
                type:Passenger.SHOW_PASSENGER_LIST_SUCCESS,
                payload:plist
            })
        }
        else{
            dispatch({
                type:Passenger.SHOW_PASSENGER_LIST_FAILIURE,
                payload:''
            })
        }
    }
}