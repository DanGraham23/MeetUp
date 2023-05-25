import * as Yup from 'yup';

export const INITIAL_FORM_STATE = {
    email: '',
    password: '',
}; 
export const FORM_VALIDATION = Yup.object().shape({
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
});

