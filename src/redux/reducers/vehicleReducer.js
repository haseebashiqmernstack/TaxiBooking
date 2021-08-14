import { Vehicle } from "../actiontypes/constants"

 const initial={
     loading:false,
     vehicles:[],
     vehicle:'',
     message:''
 }

 const vehicleReducer = (state=initial,action) => {
   switch(action.type)
   {
       case Vehicle.SAVE_VEHICLE:
       return{
           ...state,
           loading:true
       }
       case Vehicle.SAVE_VEHICLE_SUCCESS:
           console.log(action.payload)
           return {
               ...state,
               loading:false,
               vehicles:[action.payload]
           }
           case Vehicle.SAVE_VEHICLE_FAILIURE:
               return {
                   ...state,
                   loading:false,
                   message:'not saved',
               }
               case Vehicle.GET_VEHICLES:
                   return {
                       ...state,
                       loading:true
                   }
                   case Vehicle.GET_VEHICLES_SUCCESS:
                    return {
                        ...state,
                        vehicles:[...action.payload],
                        loading:false
                    }
                    case Vehicle.GET_VEHICLES_FAILIURE:
                        return {
                            ...state,
                            message:'not avaiable',
                            loading:false
                        }
                        case Vehicle.GET_VEHICLE:
                            return {
                                ...state,
                                loading:true
                            }
                            case Vehicle.GET_VEHICLE_SUCCESS:
                                return {
                                    ...state,
                                    vehicle:action.payload,
                                    loading:false
                                }
                                case Vehicle.GET_VEHICLE_FAILIURE:
                                    return{
                                        ...state,
                                        message:'not avaiable',
                                        loading:false
                                    }
                                    default:
                                        return state;
   }
 }

 export default vehicleReducer;