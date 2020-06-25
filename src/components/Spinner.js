import React from 'react'
import spin from '../images/Spin-1s-200px.gif'

export function Spinner() {
    return (
        <div className='spinner-div'>
            <div className="spinner-border theSpinner text-dark" role="status">
            </div>
        </div>
    )
}

export function Spinner3() {
    return (
        <div className='spinner3'>
                <img src={spin} alt='...loading'/>
        </div>
    )
}



export function Spinner2() {
    return (
        <div className='spinner2'>
                <img src={spin} alt='...loading'/>
        </div>
    )
}

export function ParcelSpinner() {
    return (
        <div className='parcelSpin'>
                <img src={spin} alt='...loading'/>
        </div>
    )
}

export function SignInSpinner() {
    return (
        <div className='spinner-div'>
            <div className="spinner-border signInSpinner text-dark" role="status">
            </div>
        </div>
    )
}



export function SignUpSpinner() {
    return (
        <div className='spinner-div'>
            <div className="spinner-border signUpSpinner text-dark" role="status">
            </div>
        </div>
    )
}
