import { OPEN_MODAL, CLOSE_MODAL, OPEN_VIEW_ORDER_MODAL, CLOSE_VIEW_ORDER_MODAL, OPEN_PROFILE_MODAL, CLOSE_PROFILE_MODAL } from '../types';

export const openModal = () => dispatch => {
    dispatch({
        type: OPEN_MODAL
    })
}

export const closeModal = () => dispatch => {
    return dispatch({
        type: CLOSE_MODAL
    })
}

export const openViewModal = (parcel) => dispatch => {
   return dispatch({
       type: OPEN_VIEW_ORDER_MODAL,
       payload: parcel
    })
}

export const closeViewModal = () => dispatch => {
     dispatch({
         type: CLOSE_VIEW_ORDER_MODAL
     })
}

export const openProfileModal = () => dispatch => {
    return dispatch({
        type: OPEN_PROFILE_MODAL
    })
}

export const closeProfileModal = () => dispatch => {
    dispatch({
        type: CLOSE_PROFILE_MODAL
    })
}