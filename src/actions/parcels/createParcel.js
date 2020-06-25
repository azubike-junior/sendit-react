import { CREATE_PARCEL, CREATE_PARCEL_FAILURE, isLoadingCreate, signInSuccess, CLOSE_MODAL, OPEN_VIEW_ORDER_MODAL, isDisabled} from '../types';
import { baseUrl } from '../../helpers/constants';
import Axios from 'axios';
import { changeSignInState } from '../changeState';
import { toast } from 'react-toastify';


export const createParcel = (parcel, history, props) => dispatch => {
    dispatch({
        type: isDisabled
    })
    dispatch({
        type: isLoadingCreate
    })
    const { parcelName, destination, pickupLocation, parcelWeight, parcelWeightScale } = parcel
    
    const token = window.localStorage.getItem('token');
    return Axios.post(`${baseUrl}/parcels`, {
        parcelName,
        destination,
        pickupLocation,
        parcelWeight,
        parcelWeightScale
    },
        {
            headers: {
                Authorization: token
            }
        }
    )
        .then(resp => {
            dispatch(changeSignInState(signInSuccess))
            dispatch({
                type: CREATE_PARCEL,
                payload: resp.data.data
            })
            history.push('/dashboard')
             toast('Order Created Successfully', {
                 position: toast.POSITION.TOP_RIGHT,
                 className: 'createParcelToast'
             })
            dispatch(changeSignInState(signInSuccess))
            dispatch({
                type: CLOSE_MODAL
            })
            dispatch({
                type: OPEN_VIEW_ORDER_MODAL,
                payload: resp.data.data
           })
        })
        .catch(e => {
            console.log(e)
            dispatch({
                type: CREATE_PARCEL_FAILURE,
                errorType: e.response.data.message
            })
        })
} 