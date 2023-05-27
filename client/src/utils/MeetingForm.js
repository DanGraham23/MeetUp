import moment from 'moment';
import * as Yup from 'yup';

export const INITIAL_FORM_STATE = {
    title: '',
    startDate: '',
    startTime: '',
    endTime: '',
    description: '',
    tos: false,
}

export const FORM_VALIDATION = Yup.object().shape({
    title: Yup
        .string()
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