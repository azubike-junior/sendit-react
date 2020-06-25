/* eslint-disable no-fallthrough */
import {
    emailRegex
} from '../helpers/constants'

export const validateSignup = (e, state) => {
    const {
        name,
        value
    } = e.target;
    const {
        errorFormat,
        password
    } = state
    // eslint-disable-next-line default-case
    switch (name) {
        case 'firstName':
            errorFormat.firstName =
                value.length < 2 ? 'First name must be more than 2 chars' : '';
            break;
        case 'lastName':
            errorFormat.lastName =
                value.length < 2 ? 'Last name must be more than 2 chars' : '';
             break;
        case 'email':
            errorFormat.email =
                !emailRegex.test(value) ? 'invalid email address' : '';
             break;
        case 'password':
            errorFormat.password =
                value.length < 8 ? 'password is too weak' : '';
             break;
        case 'confirmPassword':
            errorFormat.confirmPassword =
                value !== password ? 'password does not match' : '';
            break;
    }
    return errorFormat;
}

export const isValid = (state) => {
    const {
        errorFormat,
        isDisabled,
        ...rest
    } = state;

    for (let value of Object.values(errorFormat)) {
        if (value.length > 0) {
            return false
        }
    }

    for (let value of Object.values(rest)) {
        if (value.length === 0) {
            return false
        }
    }
    return true
}
