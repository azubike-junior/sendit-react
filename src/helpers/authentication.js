import jwtencode from 'jwt-decode';
import React from 'react'
import { Route, Redirect } from 'react-router-dom';

export const authenticateRoute = () => {
    const token = window.localStorage.getItem('token')
    try {
        if (!token || typeof token === 'undefined') {
            return false
        }
        jwtencode(token)
            return true
    } catch (e) {
        return false
    }
}

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAuth = authenticateRoute()
    return (
        <Route
            {...rest}
            render={props => 
                isAuth ? (<Component {...props}/>) : (
                    <Redirect to={{ pathname: '/signin' }} />
                )
            }
        />
    )
}