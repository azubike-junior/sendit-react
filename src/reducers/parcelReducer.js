import {
    CREATE_PARCEL,
    CREATE_PARCEL_FAILURE,
    UPDATE_PARCEL_LOCATION,
    UPDATE_PARCEL_STATUS,
    GET_PARCEL,
    GET_USER_PARCELS,
    isLoading,
    GET_PARCEL_FAILURE,
    CANCEL_PARCEL_ORDER,
    CANCEL_PARCEL_FAILURE,
    UPDATE_PARCEL_DESTINATION,
    CLOSE_MODAL,
    OPEN_MODAL,
    OPEN_VIEW_ORDER_MODAL,
    CLOSE_VIEW_ORDER_MODAL,
    isLoadingCreate,
    OPEN_PROFILE_MODAL,
    CLOSE_PROFILE_MODAL,
    isDisabled,
    
} from '../actions/types'

const initState = {
    parcels: [],
    parcel:{},
    parcelStatus: false,
    isLoading: true,
    isLoadingCreate: false,
    parcelError: '',
    isOpen: false,
    isOpenView: false,
    isOpenProfile: false,
    isDisabled: false
}

const parcelReducers = (state = initState, action) => {
   switch(action.type){
       case GET_USER_PARCELS:
           return{
               ...state,
               parcels: action.payload,
               isLoading: false
           }
       case GET_PARCEL:
           return {
               ...state, 
               parcel:action.payload
           }
       case CREATE_PARCEL_FAILURE:
           console.log('======parcelError', action.errorType)
            return {
                ...state,
                parcelStatus: false,
                parcelError: action.errorType
           }
       case CANCEL_PARCEL_ORDER:
           const parcelId = action.payload;
           const parcel = state.parcels.find(x => x.parcelId === parcelId);

           const parcels = state.parcels;
           const idx = parcels.indexOf(parcel)
           parcels[idx] = { ...parcel, parcelStatus: "CANCELLED"};

            return {
                ...state,
                parcels,
                isLoading: false,
                isOpenView: false
                
           }
        case CANCEL_PARCEL_FAILURE:
        return {
            ...state,
            parcelError: action.errorType,
        }
       case GET_PARCEL_FAILURE:
           return {
               ...state,
               parcelError: action.errorType
           }
       case CREATE_PARCEL:
           console.log('=====action', state.parcels)
            return {
                ...state,
                parcel: action.payload,
                parcels:[...state.parcels, action.payload],
                isLoadingCreate: false,
                isDisabled:false
            }
       case UPDATE_PARCEL_STATUS:
           return {
                ...state,
                parcelStatus:true
           }
       case UPDATE_PARCEL_DESTINATION:
           const updated = action.payload[0];
           const foundParcel = state.parcels.find(parcel => parcel.parcelId === updated.parcelId);
           const index = state.parcels.indexOf(foundParcel);
           const newState = state.parcels
           newState[index] = updated
            return {
                ...state,
                parcel: action.payload,
                parcels:newState,
                isLoading: false
            }
        case UPDATE_PARCEL_LOCATION:
        return {
            ...state,
                parcel: action.payload,
                parcelStatus: true,
                
           }
       case OPEN_MODAL:
           return {
               ...state,
               isOpen: true
           }
        case CLOSE_MODAL:
            return {
                ...state,
                isOpen: false
           }
       case OPEN_VIEW_ORDER_MODAL:
            return {
                ...state,
                parcel: action.payload,
                isOpenView: true
           }
       case CLOSE_VIEW_ORDER_MODAL:
            return {
                ...state,
                isOpenView: false
            }
       case OPEN_PROFILE_MODAL:
           return {
               ...state,
               isOpenProfile: true
           }
       case CLOSE_PROFILE_MODAL:
           return {
               ...state,
               isOpenProfile: false
           }
       case isLoading:
           return {
               ...state,
               isLoading:true
           }
       case isDisabled:
           return {
               ...state,
               isDisabled: true
           }
        case isLoadingCreate:
            return {
                ...state,
                isLoadingCreate: true
            }
        default: 
            return state
        
}
}
export default parcelReducers