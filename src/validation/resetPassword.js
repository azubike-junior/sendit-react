import {
    passwordRegex
} from '../helpers/constants'

export const resetPasswordValidation = (e, state) => {
    const { name, value } = e.target;
    const { errorFormat, password } = state
    
    // eslint-disable-next-line default-case
    switch (name) {
         case 'password':
         errorFormat.password = !passwordRegex.test(value) ? 'Password must be atleast 6 chars with atleast 1 uppercase, 1 number, & 1 special char' : '';
         break;
         case 'confirmPassword':
         errorFormat.confirmPassword =
             value !== password ? 'password does not match' : '';
         break;
    }
    return errorFormat;
}

