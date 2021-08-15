import axios from 'axios';
// import { restart } from 'nodemon';

const axiosInstance=axios.create({
    baseURL:'https://taxi-booking-mark.herokuapp.com/api'
})


const apiService={
    //  Login:async(user)=>{
    //          return await axiosInstance.post('/user/signIn',{...user}).then(res=>res.data)
    // },
    // Service:async()=>{
    //     return await axiosInstance.get('/service/getServices').then(res=>res.data)
    // },
    // Signup: async (user)=>{
    //     return await axiosInstance.post('/user/register',{...user}).then(res=>res.data)
    // },

    // list of booking
    bookingRegister:async (booking)=>{
           return await axiosInstance.post('/booking/bookingRides',{...booking}).then(res=>res.data)
    },
    getBookingList:async ()=>{
        return await axiosInstance.get('/booking/getBookingRides').then(res=>res.data)
    },
    bookingConfirm:async(id,data)=>{
        return await axiosInstance.patch(`/booking/rideconfirm/${id}`,{...data}).then(res=>res.data)
    },
    bookingCancel:async(id,data)=>{
         return await axiosInstance.patch(`/booking/ridecancel/${id}`,{...data}).then(res=>res.data)
    },
    getBookingRideInfo:async(id)=>{
        console.log(id)
         return await axiosInstance.get(`/booking/getbookingrideinfo/${id}`).then(res=>res.data)
    },
    // list of booking end

    // list riders

    registerRiders:async(riders)=>{
         return await axiosInstance.post('/rider/register',{...riders}).then(res=>res.data)
    },
    getRiders:async()=>{
        return await axiosInstance.get('/rider/getRiders').then(res=>res.data)
    },
    riderActive:async(id,data)=>{
          return await axiosInstance.patch(`/rider/rideractive/${id}`,{...data}).then(res=>res.data)
    },
    riderDeactive:async(id,data)=>{
        return await axiosInstance.patch(`/rider/riderdeactive/${id}`,{...data}).then(res=>res.data)
  },
    // list of riders end

    // vehicle start

    registerVehicle:async (vehicle) => {
        console.log(vehicle)
            return await axiosInstance.post('/vehicle/register',{...vehicle}).then(res=>res.data)
    },
     getVehicles:async () => {
            return await axiosInstance.get('/vehicle/getvehicles').then(res=>res.data)
     },
     getVehicle:async (id) => {
         return await axiosInstance.get(`/vehicle/getvehicle/${id}`).then(res=>res.data)
     },
     vehicleActivate: async (id,data) => {
          return await axiosInstance.patch(`/vehicle/vehicleactivate/${id}`,{...data}).then(res=>res.data);
     },
     vehicleDeactivate: async (id,data) => {
           return await axiosInstance.patch(`/vehicle/vehicledeactivate/${id}`,{...data}).then(res=>res.data);
     },
    // vehicle end
}
export default apiService;