import apiService from "../../apis/api"
import { Booking } from "../actiontypes/constants"

export const ShowBookingInfo=(id)=>{
return async (dispatch)=>{
    dispatch({
        type:Booking.GET_BOOKING_INFO,
        payload:''
    })
    const oneBooking=await apiService.getBookingRideInfo(id);
console.log(oneBooking.booking.riderName)
    if(oneBooking!=null)
    {
        dispatch({
            type:Booking.GET_BOOKING_INFO_SUCCESS,
            payload:oneBooking.booking
        })
    }
    else{
        dispatch({
            type:Booking.GET_BOOKING_INFO_FAILIURE,
            payload:''
        })
    }
}
}

export const ShowBooking=()=>{
    return async (dispatch) => {
        dispatch({
            type:Booking.SHOW_BOOKING_REQUEST,
            payload:''
        })
        const booking=await apiService.getBookingList();
        console.log('from action:',booking.bookings)
        if(booking!=null)
        {
            dispatch({
                type:Booking.SHOW_BOOKING_SUCCESS,
                payload:booking.bookings
            })
        }
        else{
            dispatch({
                type:Booking.SHOW_BOOKING_FAILIURE,
                payload:'data not avaliable',
            })
        }
    }
}

export const BookingConfirm=(id,data)=>{
    return async (dispatch) => {
           dispatch({
               type:Booking.BOOKING_ACTIVATE,
               payload:''
           })
 const bConfirm=apiService.bookingConfirm(id,data);
 if(bConfirm!=null)
 {
     dispatch({
         type:Booking.BOOKING_ACTIVATE_SUCCESS,
         payload:id
     })
 }
 else{
     dispatch({
         type:Booking.BOOKING_ACTIVATE_FAILIURE,
         payload:''
     })
 }
           
    }
}

export const BookingCancel=(id,data)=>{
    return async (dispatch) => {
           dispatch({
               type:Booking.BOOKING_DEACTIVATE,
               payload:''
           })
 const bCancel=apiService.bookingCancel(id,data);
 if(bCancel!=null)
 {
     dispatch({
         type:Booking.BOOKING_DEACTIVATE_SUCCESS,
         payload:id
     })
 }
 else{
     dispatch({
         type:Booking.BOOKING_DEACTIVATE_FAILIURE,
         payload:''
     })
 }
           
    }
}
