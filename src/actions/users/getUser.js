import { GET_USER, isLoading } from '../types';
import { baseUrl } from '../../helpers/constants';
import Axios from 'axios';

export const getUser = () => dispatch => {
    dispatch({
        type:isLoading
    })
    const token = window.localStorage.getItem('token')
    return Axios.get(`${baseUrl}/user`, {
        headers: {
            Authorization:token
        }
    })
        .then(resp => {
            dispatch({
                type: GET_USER,
                payload: resp.data.data
            })
        })
        .catch(e => {
            console.log(e.response)
        })
}

