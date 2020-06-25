import axios from 'axios';
import { baseUrl } from '../../helpers/constants'
import {
    signUpSuccess,
    signUpFailure,
    isLoading
} from '../types'
import {
    changeSignUpState
} from '../changeState'
import { toast } from 'react-toastify';

const registerUser = (user, history) => dispatch => {
    const {
        firstName,
        lastName,
        email,
        password
    } = user;
    dispatch({
        type: isLoading
    })
    return axios.post(`${baseUrl}/signup`, {
        firstName,
        lastName,
        email,
        password
    }).then(resp => {
        window.localStorage.setItem('token', `${resp.data.data}`)
        dispatch(changeSignUpState(signUpSuccess))
        history.push('/dashboard')
        toast('welcome to sendIT', {
            position: toast.POSITION.TOP_RIGHT,
            className: 'uploadToast'
        })
    }).catch(e => {
        console.log(e)
        dispatch(changeSignUpState(signUpFailure, null, null, e.response.data.message))
    })
}

export default registerUser;