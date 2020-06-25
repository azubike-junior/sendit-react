import {
    isLoading,
    UPDATE_PARCEL_DESTINATION,
    signInFailure
} from '../types';
import axios from 'axios';
import {
    baseUrl
} from '../../helpers/constants'; 
import { toast } from 'react-toastify';

export const updateDestination = (destination, parcelId, props) =>
    dispatch => {
    dispatch({
        type: isLoading
    })
    const token = window.localStorage.getItem('token')
    return axios.put(`${baseUrl}/parcels/${parcelId}/destination`, {
            destination
        }, {
            headers: {
                Authorization: token
            }
        })
        .then(resp => {
            dispatch({
                type: UPDATE_PARCEL_DESTINATION,
                payload: resp.data.data,
            })
             toast('destination has been changed successfully', {
                 position: toast.POSITION.TOP_RIGHT,
                 className: 'uploadToast'
             })
            props.closeViewModal()
        })
        .catch(e => {
            console.log(e.response)
            dispatch({
                type: signInFailure,
                errorType: e.response.message
            })
        })
}
