import * as Yup from 'yup';

export const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
}; 
export const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup
        .string()
        .required('Required'),
    lastName: Yup
        .string()
        .required('Required'),
    email: Yup
        .string()
        .email('Invalid email')
        .required('Required'),
    password: Yup
        .string()
        .required('Please Enter your password')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    phone: Yup
        .number()
        .integer()
        .min(1000000000, 'Phone number must be 10 digits')
        .max(9999999999, 'Phone number must be 10 digits')
        .typeError('Invalid phone number')
        .required('Required'),
    address: Yup
        .string()
        .required('Required'),
    city: Yup
        .string()
        .required('Required'),
    state: Yup
        .string()
        .required('Required'), 
    country: Yup
        .string()
        .required('Required'), 
});

