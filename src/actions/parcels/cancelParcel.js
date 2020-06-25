import {
    isLoading,
    CANCEL_PARCEL_ORDER,
    CANCEL_PARCEL_FAILURE
} from '../types';
import axios from 'axios';
import {
    baseUrl
} from '../../helpers/constants'

// axios.interceptors.request.use(request =>  {
//     request.headers["Authorization"] = window.localStorage.getItem("token")
// } )


export const cancelParcel = (parcelId) => dispatch => {
    dispatch({
        type: isLoading
    })
    const token = window.localStorage.getItem('token')
    return axios.put(`${baseUrl}/parcels/${parcelId}/cancel`,{}, {headers: {
        Authorization: token
    }})
        .then(resp => {
            console.log(resp.data)
            dispatch({
                type: CANCEL_PARCEL_ORDER,
                payload: parcelId
            })
        })
        .catch(e => {
            console.log(e.response)
            dispatch({
                type: CANCEL_PARCEL_FAILURE,
                errorType: e.resp.data.message
            })
        })
} 