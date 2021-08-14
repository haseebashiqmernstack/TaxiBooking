// import booking from "../../../../models/booking";
import { Booking } from "../actiontypes/constants";

const initial={
    loading:false,
    booking:[],
    bookinginfo:"",
    message:''
}

const bookingReducer=(state=initial,action)=>{
    switch (action.type) {
        case Booking.SHOW_BOOKING_REQUEST:
            return {
                ...state,
                loading:true
            }
            case Booking.SHOW_BOOKING_SUCCESS:
                return {
                    ...state,
                    booking:[...action.payload],
                    loading:false
                }
                case Booking.SHOW_BOOKING_FAILIURE:
                    return {
                        ...state,
                        loading:false,
                        message:'Data not Avaliable',
                    }
                    case Booking.GET_BOOKING_INFO:
                        return {
                            ...state,
                            loading:true,
                        }
                        case Booking.GET_BOOKING_INFO_SUCCESS:
                            console.log('from reducer:',action.payload)
                            return {
                                ...state,
                                bookinginfo:action.payload,
                                loading:false
                            }
                            case Booking.BOOKING_FAILIURE:
                                return {
                                    ...state,
                                    message:'not avaliable',
                                    loading:false
                                }
        default:
            return state;
    }
}
export default bookingReducer;