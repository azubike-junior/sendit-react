/* eslint-disable default-case */
/* eslint-disable no-fallthrough */
import {
    emailRegex
} from '../helpers/constants';

export const signinValidator = (e, state) => {
    const {
        name,
        value
    } = e.target;
    const {
        errorFormat
    } = state;

    switch (name) {
        case 'email':
            errorFormat.email =
                !emailRegex.test(value) ? 'invalid email address' : '';
            break;
        case 'password':
            errorFormat.password =
                value.length < 8 ? 'password is too weak' : '';
            break;
    }
    return errorFormat;
}   