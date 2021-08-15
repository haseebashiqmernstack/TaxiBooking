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

export const RiderActive=(id,data)=>{
    return async (dispatch)=>{
             dispatch({
                 type:Passenger.PASSENGER_ACTIVATE,
                 payload:''
             })
             const passenger=await apiService.riderActive(id,data);
             if(passenger!=null)
             {
                 dispatch({
                     type:Passenger.PASSENGER_ACTIVATE_SUCCESS,
                     payload:id
                 })
             }
             else{
                 dispatch({
                     type:Passenger.PASSENGER_ACTIVATE_FAILIURE,
                     payload:''
                 })            
             }
    }
}

export const RiderDeactive=(id,data)=>{
    return async (dispatch)=>{
             dispatch({
                 type:Passenger.PASSENGER_DEACTIVATE,
                 payload:''
             })
             const passenger=await apiService.riderDeactive(id,data);
             if(passenger!=null)
             {
                 dispatch({
                     type:Passenger.PASSENGER_DEACTIVATE_SUCCESS,
                     payload:id
                 })
             }
             else{
                 dispatch({
                     type:Passenger.PASSENGER_DEACTIVATE_FAILIURE,
                     payload:''
                 })            
             }
    }
}