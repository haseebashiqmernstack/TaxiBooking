import { Passenger } from "../actiontypes/constants";

const initial={
    loading:false,
    passenger:[]
};

const passengerReducer=(state=initial,action)=>{
    switch(action.type)
    {
        case Passenger.SHOW_PASSENGER_LIST:
            return {
                ...state,
                loading:true
            }

            case Passenger.SHOW_PASSENGER_LIST_SUCCESS:
console.log("from reducer",action.payload.riders)
            return {
                    ...state,
                    passenger:[...action.payload.riders],
                    loading:false
                }

                case Passenger.SHOW_PASSENGER_LIST_FAILIURE:
                    return{
                        ...state,
                        loading:true
                    }
            default:
                return state;               
    }
}

export default passengerReducer;