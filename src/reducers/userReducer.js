import {
    signInSuccess,
    signInFailure,
    signUpFailure,
    signUpSuccess,
    isLoggedOut,
    isLoading,
    GET_USER,
    UPLOAD_IMAGE,
    isLoadingImg,
    isDisabled,
    PASSWORD_RESET
} from '../actions/types';

const initState = {
    user: {},
    resetError: '',
    resetMsg:'',
    errorMsg: '',
    passwordMsg:'',
    signUpMsg:'',
    signInStatus: '',
    signUpStatus: '',
    role: '',
    isLoading: false,
    isLoadingImg: false,
    isDisabled:false
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case signUpFailure:
            return {
                ...state,
                    signUpStatus: signUpFailure,
                    signupErrorMsg: action.errorMsg, 
                    users: '',
                    role: false ,
                    isLoading: false
            }
        case signInFailure:
                return {
                    ...state,
                    signInStatus: signInFailure,
                    errorMsg: action.errorMsg,
                    role: false,
                    isLoading:false
                }
        case signInSuccess:
                return {
                    ...state,
                        signInStatus: signInSuccess,
                        role: action.role,
                        isLoading: false
                }
        case signUpSuccess:
                return {
                    ...state,
                        signUpStatus: signUpSuccess,
                        signUpMsg:action.payload,
                        user: action.user,
                        role: action.role,
                        isLoading: false
            }
        case PASSWORD_RESET:
            console.log('===reset', action.passwordError)
            return {
                ...state,
                passwordMsg:action.payload,
                errorMsg: action.passwordError,
                resetError: action.passwordError,
                resetMsg:action.payload,
                isLoading: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
            }
        case UPLOAD_IMAGE:
            return {
                ...state,
                payload: action.payload,
                isLoadingImg: false,
                isDisabled: false
            }
        case isLoggedOut:
                return {
                    ...state,
                    signInStatus: signInFailure
                }
        case isLoading:
                return {
                    ...state,
                    isLoading: true,
            }
         case isLoadingImg:
                return {
                    ...state,
                    isLoadingImg: true,
            }
        case isDisabled:
            return {
                ...state,
                isDisabled: true
                }
                default:
                return state
                    

    }
}

export default userReducer