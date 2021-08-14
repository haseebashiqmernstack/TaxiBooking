import { authConstant, Signup } from "../actiontypes/constants";

const initialState={
    user:'',
    authentication:false,
    authenticate:false,
    isSave:false,
    isAlreadySaved:false,
    loading:false
}

const userReducer=(state=initialState,action)=>{
    switch (action.type) {
        case authConstant.LOGIN_REQUEST:
        return{...state,authentication:true}
        case authConstant.LOGIN_SUCCESS:
            return {
                ...state,
                user:action.payload,
                authentication:false,
                authenticate:true
            }
        case authConstant.LOGIN_FAIL:
            return{
                ...state,
                authenticate:false
            }
            case Signup.SINGUP_REQUEST:
                return {
                    ...state,
                    isSave:false,
                    loading:true
                }
                case Signup.SINGUP_SUCCESS:
                    return {
                        ...state,
                        isSave:true,
                        loading:false,
                        user:action.payload
                    }
                    case Signup.SINGUP_FAIL:
                        return {
                           ...state,
                           loading:false,
                           isAlreadySaved:true 
                        }
        default:
           return state;
    }
}

export default userReducer;