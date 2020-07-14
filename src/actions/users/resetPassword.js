import axios from 'axios';
import {
    baseUrl
} from '../../helpers/constants'
import {
    isLoading,
    PASSWORD_RESET
} from '../types';

export const resetPasswordRequest = (user) => dispatch => {
    const {
        email
    } = user
    dispatch({
        type: isLoading
    })
    return axios.post(`${baseUrl}/user/resetPassword`, {
        email
    }).then(resp => {
        console.log('====resp', resp.data.data)
        dispatch({
            type: PASSWORD_RESET,
            payload: resp.data.message,
            resetToken: resp.data.data
        })
    }).catch(e => {
        console.log(e.response.data.message)
         dispatch({
             type: PASSWORD_RESET,
             passwordError: e.response.data.message
         })
    })
}

export const passwordReset = (password, token) => dispatch => {
    dispatch({
        type: isLoading
    })
    console.log('======token', token)
    console.log('=====password', password)
    return axios.put(`${baseUrl}/user/resetPassword/${token}`, {
        password
    }).then(resp => {
        dispatch({
            type: PASSWORD_RESET,
            payload: resp.data.message
        })
    }).catch(e => {
        console.log(e.response.data.message)
        dispatch({
            type: PASSWORD_RESET,
            passwordError: e.response.data.message
        })
    })
}