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
    return axios.post(`${baseUrl}/user/signup`, {
        firstName,
        lastName,
        email,
        password
    }).then(resp => {
        console.log('======= it got here')
        console.log('=======response', resp)
        window.localStorage.setItem('token', `${resp.data.data}`)
        dispatch(changeSignUpState(signUpSuccess));
        dispatch({
            type: signUpSuccess,
            payload: resp.data.message
        })
        history.push('/signin')
    }).catch(e => {
        console.log(e)
        dispatch(changeSignUpState(signUpFailure, null, null, e.response.data.message))
    })
}

export default registerUser;