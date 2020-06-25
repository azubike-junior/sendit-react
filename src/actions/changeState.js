/* eslint-disable default-case */
import {
    isLoggedOut,
    signUpFailure,
    signUpSuccess,
    signInSuccess,
    signInFailure
} from './types';

export const changeSignInState = (signInState, user, role, errorMsg) => dispatch => {
    switch (signInState) {
        case signInSuccess:
            return dispatch({
                type: signInSuccess,
                user,
                role,
                errorMsg
            })
        case signInFailure:
            return dispatch({
                type: signInFailure,
                user,
                role,
                errorMsg
            })
        case isLoggedOut:
            return dispatch({
                type: isLoggedOut
            })
    }
}

export const changeSignUpState = (signUpState, user, role, errorMsg) => dispatch => {
  
    switch (signUpState) {
        case signUpSuccess:
            return dispatch({
                type: signUpSuccess,
                user,
                role
            })
        case signUpFailure:
            return dispatch({
                type: signUpFailure,
                user,
                role,
                errorMsg
            })
    }
}