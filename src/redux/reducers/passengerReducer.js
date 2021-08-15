import { Passenger } from "../actiontypes/constants";

const initial = {
    loading: false,
    passenger: []
};

const passengerReducer = (state = initial, action) => {
    switch (action.type) {
        case Passenger.SHOW_PASSENGER_LIST:
            return {
                ...state,
                loading: true
            }

        case Passenger.SHOW_PASSENGER_LIST_SUCCESS:
            console.log("from reducer", action.payload.riders)
            return {
                ...state,
                passenger: [...action.payload.riders],
                loading: false
            }

        case Passenger.SHOW_PASSENGER_LIST_FAILIURE:
            return {
                ...state,
                loading: true
            }
        case Passenger.PASSENGER_ACTIVATE:
            return {
                ...state,
                loading: true
            }
        case Passenger.PASSENGER_ACTIVATE_SUCCESS:
            let findPassenger = state.passenger.find(p => p._id == action.payload)
            let index = state.passenger.findIndex(p => p._id == action.payload)
            findPassenger.active = "true"
            state.passenger[index] = findPassenger
            return {
                ...state,
                loading: false
            }
        case Passenger.PASSENGER_DEACTIVATE:
            return {
                ...state,
                loading: true
            }
        case Passenger.PASSENGER_DEACTIVATE_SUCCESS:
            let findDPassenger = state.passenger.find(p => p._id == action.payload)
            let dIndex = state.passenger.findIndex(p => p._id == action.payload)
            findDPassenger.active = "false"
            state.passenger[dIndex] = findDPassenger
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default passengerReducer;