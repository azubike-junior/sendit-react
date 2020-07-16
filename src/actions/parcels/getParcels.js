/* eslint-disable default-case */
import {
    GET_USER_PARCELS,
    GET_PARCEL,
    GET_PARCEL_FAILURE,
    signInSuccess,
    signInFailure,
    isLoading
} from '../types';
import axios from 'axios';
import {
    baseUrl
} from '../../helpers/constants'
import {
    changeSignInState
} from '../changeState';
import ViewOrder from '../../components/modals/ViewOrder';

const getUserParcels = () => dispatch => {
    dispatch({
        type: isLoading
    })
    const token = window.localStorage.getItem('token')
    return axios.get(`${baseUrl}/parcels/userParcels`, {
            headers: {
                Authorization: token
            },
    })
        .then(resp => {
            dispatch({
                type: GET_USER_PARCELS,
                payload: resp.data.data
            })
        }).catch(e => {
            console.log(e)
            dispatch({
                type: GET_PARCEL_FAILURE,
                errorType: e.response.message
            })
        })
}

const getParcel = (id) => dispatch => {
    return axios.get(`${baseUrl}/parcels/${id}`)
        .then(resp => {
            dispatch({
                type: GET_PARCEL,
                payload: resp.data.data
            })
        }).catch(e => {
            switch (e.response.status) {
                case 404:
                    dispatch(changeSignInState(signInSuccess, null, false, null));
                    return dispatch({
                        type: ViewOrder,
                        payload: []
                    });
                case 401:
                    return dispatch(
                        changeSignInState(
                            signInFailure,
                            null,
                            false,
                            e.response.data.error
                        )
                    );
            }
        })
}

export {
    getUserParcels,
    getParcel
}