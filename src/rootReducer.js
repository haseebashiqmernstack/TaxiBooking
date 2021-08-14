import { combineReducers } from "redux";
import passengerReducer from "./redux/reducers/passengerReducer";
import bookingReducer from "../src/redux/reducers/bookingReducer";
import vehicleReducer from "./redux/reducers/vehicleReducer";
const rootReducer=combineReducers({
    Passenger:passengerReducer,
    RideBooking:bookingReducer,
    Vehicle:vehicleReducer
})

export default rootReducer;