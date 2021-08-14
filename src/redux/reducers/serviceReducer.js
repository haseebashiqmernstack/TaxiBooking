import { allServices } from "../actiontypes/constants";

const initialService={
loading:false,
services:[],
};

const serviceReducer=(state=initialService,action)=>
{
    switch (action.type) {
        case allServices.SERVICE_REQUEST:
            return {
                ...state,
                loading:true
            }
               
         case allServices.SERVICE_SUCCESS:
             return {
                 ...state,
                 services:[...action.payload._service],
                 loading:false
             }

             case allServices.SERVICE_FAIL:
                 return {
                     ...state,
                     loading:true
                 }
        default:
            return state
    }
}

export default serviceReducer;