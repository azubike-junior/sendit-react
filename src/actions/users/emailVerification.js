import { EMAIL_VERIFIER, isLoading, signInSuccess, signInFailure } from '../types';
import Axios from 'axios';
import { baseUrl } from '../../helpers/constants';
import { changeSignInState } from '../changeState';

export const emailVerifier = (id, history) => dispatch => {
    dispatch({
        type: isLoading
    })
    return Axios.get(`${baseUrl}/user/verification/${id}`)
        .then(resp => {
        window.localStorage.setItem('token',`${
            id
            }`);
        dispatch({
            type: EMAIL_VERIFIER,
            payload: resp.message
        })
        dispatch(changeSignInState(signInSuccess))
        history.push("/dashboard")
        }).catch(e => {
        console.log(e.response)
        dispatch(changeSignInState(signInFailure, null, null, e.response.data.message))
    })
}
