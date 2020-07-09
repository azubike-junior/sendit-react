import { isLoading, signInSuccess, signInFailure } from '../types';
import Axios from 'axios';
import { changeSignInState } from '../changeState';
import { baseUrl } from '../../helpers/constants';
import { toast } from 'react-toastify';

export const emailVerifier = (token, history) => dispatch => {
    console.log('====token', token)
    dispatch({
        type: isLoading
    })
    return Axios.get(`${baseUrl}/user/verification/${token}`)
        .then(resp => {
            console.log('====resp', resp)
            window.localStorage.setItem('token', `${token}`)
          toast(`${resp.message}`, {
              position: toast.POSITION.TOP_RIGHT,
              className: 'uploadToast'
          })
        history.push('/dashboard')
        dispatch(changeSignInState(signInSuccess))
        }).catch(e => {
        console.log(e.response.data)
        dispatch(changeSignInState(signInFailure, null, null, e.response.data.message))
    })
}
