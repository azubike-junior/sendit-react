import axios from 'axios';
import { baseUrl } from '../../helpers/constants'
import { toast } from 'react-toastify';
import {
    signInFailure,
    isLoading
} from '../types';
import {
    changeSignInState
} from '../changeState'

const signUserIn = (user, history) => dispatch => {
    const {
        email,
        password
    } = user;
    dispatch({
        type: isLoading
    })
    return axios.post(`${baseUrl}/user/signin`, {
        email,
        password
    }).then(resp => {
        window.localStorage.setItem('token', `${
            resp.data.data
            }`)
        history.push("/dashboard")
        toast('welcome to sendIT', {
        position: toast.POSITION.TOP_RIGHT,
        className: 'uploadToast'
      })
    }).catch(e => {
        dispatch(changeSignInState(signInFailure, null, null, e.response.data.message))
    })
}

export default signUserIn;