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
                                    case Vehicle.VEHICLE_ACTIVATE:
                                        return {
                                            ...state,
                                            loading:true
                                        }
                                        case Vehicle.VEHICLE_ACTIVATE_SUCCESS:
                                            console.log("from activate success :",action.payload)
                                             let findVehicle=state.vehicles.find(i=>i._id==action.payload)
                                             let index=state.vehicles.findIndex(i=>i.id==action.payload)
                                            findVehicle.active="true"
                                            state.vehicles[index]=findVehicle
                                            console.log(findVehicle);
                                            return {
                                                ...state,
                                                loading:false,
                                                // vehicles:[...state.vehicles,findVehicle]
                                            }
                                            case Vehicle.VEHICLE_DEACTIVATE:
                                                return {
                                                    ...state,
                                                    loading:true
                                                }
                                                case Vehicle.VEHICLE_DEACTIVATE_SUCCESS:
                                                    let findnewVehicle=state.vehicles.find(i=>i._id==action.payload)
                                                    let newindex=state.vehicles.findIndex(i=>i._id==action.payload)
                                                    console.log(findnewVehicle)
                                                    findnewVehicle.active="false"
                                                    state.vehicles[newindex]=findnewVehicle
                                                    return {
                                                        ...state,
                                                        loading:false
                                                    }
                                    default:
                                        return state;
   }
 }

 export default vehicleReducer;