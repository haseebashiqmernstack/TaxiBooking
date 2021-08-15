import apiService from "../../apis/api"
import { Vehicle } from "../actiontypes/constants"

export const RegisterVehicle=(vehicleData)=>{

    return async (dispatch)=>{
           dispatch({
               type:Vehicle.SAVE_VEHICLE,
               payload:''
           })
console.log("from action",vehicleData);
           const v_data=await apiService.registerVehicle(vehicleData);
           console.log(v_data)
           if(v_data!=null)
           {
               dispatch({
                   type:Vehicle.SAVE_VEHICLE_SUCCESS,
                   payload:v_data._vehicles
               })
           }
           else{
               dispatch({
                   type:Vehicle.SAVE_VEHICLE_FAILIURE,
                   payload:''
               })
           }
    }

}

export const GetVehicles=()=>{
    return async (dispatch)=>{
        dispatch({
            type:Vehicle.GET_VEHICLES,
            payload:''
        })

        const v_data=await apiService.getVehicles();

        if(v_data!=null)
        {
            dispatch({
                type:Vehicle.GET_VEHICLES_SUCCESS,
                payload:v_data._vehicles
            })
        }
        else{
            dispatch({
                type:Vehicle.GET_VEHICLES_FAILIURE,
                payload:''
            })
        }
    }
}

export const GetVehicle=(id)=>{
     return async (dispatch)=>{
         dispatch({
             type:Vehicle.GET_VEHICLE,
             payload:''
         })

         const v_data=await apiService.getVehicle(id);

         if(v_data!=null)
         {
             dispatch({
                 type:Vehicle.GET_VEHICLE_SUCCESS,
                 payload:v_data._vehicle
             })
         }
         else{
             dispatch({
                 type:Vehicle.GET_VEHICLE_FAILIURE,
                 payload:''
             })
         }
     }
}

export const VehicleActivate=(id,data)=>{
return async (dispatch) => {
    dispatch({
        type:Vehicle.VEHICLE_ACTIVATE,
        payload:''
    })

    const v_data=await apiService.vehicleActivate(id,data);
    if(v_data)
    {
        dispatch({
            type:Vehicle.VEHICLE_ACTIVATE_SUCCESS,
            payload:id
        })
    }
    else{
        dispatch({
            type:Vehicle.VEHICLE_ACTIVATE_FAILIURE,
            paylaod:''
        })
    }
}
}

export const VehicleDeactivate=(id,data)=>{
    return async (dispatch) => {
        dispatch({
            type:Vehicle.VEHICLE_DEACTIVATE,
            payload:''
        })
    
        const v_data=await apiService.vehicleDeactivate(id,data);
        if(v_data)
        {
            dispatch({
                type:Vehicle.VEHICLE_DEACTIVATE_SUCCESS,
                payload:id
            })
        }
        else{
            dispatch({
                type:Vehicle.VEHICLE_DEACTIVATE_FAILIURE,
                paylaod:''
            })
        }
    }
    }