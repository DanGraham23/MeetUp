import moment from 'moment';
import * as Yup from 'yup';

export const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    startDate: '',
    startTime: '',
    endTime: '',
    description: '',
    tos: false,
}

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
    phone: Yup
        .number()
        .integer()
        .min(1000000000, 'Phone number must be 10 digits')
        .max(9999999999, 'Phone number must be 10 digits')
        .typeError('Invalid phone number')
        .required('Required'),
    startDate: Yup
        .date()
        .min(new Date(), 'Schedule at a later date')
        .required('Required'),
    startTime: Yup
        .string()
        .required('Required'),
    endTime: Yup
        .string()
        .required('Required')
        .test("is-greater-time", "end time should be later than start", function(value) {
            const { startTime } = this.parent;
            return moment(value, "HH:mm").isSameOrAfter(moment(startTime, "HH:mm"));
          }),
    description: Yup
        .string(),
    tos: Yup
        .boolean()
        .oneOf([true], 'Must Agree to the terms of service')
        .required('Required'),
});