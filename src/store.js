import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

import users from './reducers/userReducer';
import parcels from './reducers/parcelReducer';

const store = createStore(combineReducers({users, parcels}),
    composeWithDevTools(applyMiddleware(thunk))    
)

export default store