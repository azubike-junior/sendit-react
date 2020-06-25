import {
    signInFailure
} from '../types';
import {
    changeSignInState
} from '../changeState'


const logoutUser = (history) => dispatch => {
    window.localStorage.removeItem('token')
    history.push('/')
    return dispatch(changeSignInState(signInFailure)); 
}

export default logoutUser;