import { isLoading, signInSuccess, signInFailure} from '../types';
import Axios from 'axios';
import { changeSignInState } from '../changeState';
import { baseUrl } from '../../helpers/constants';
import { toast } from 'react-toastify';

export const emailVerifier = (token, history) => dispatch => {
    dispatch({
        type: isLoading
    })
    return Axios.get(`${baseUrl}/user/verification/${token}`)
        .then(resp => {
            console.log(resp.data.data.token)
            window.localStorage.setItem('token', `${resp.data.data.token}`);
            history.push('/dashboard')
          toast(`${resp.data.message}`, {
              position: toast.POSITION.TOP_RIGHT,
              className: 'uploadToast'
          })
        dispatch(changeSignInState(signInSuccess))
        }).catch(e => {
            console.log(e)
        dispatch(changeSignInState(signInFailure, null, null, e.response.data.message))
    })
}
