import {Container, Grid, TextField, Typography} from '@mui/material';
import {Formik, Form} from 'formik';
import moment from 'moment';
import * as Yup from 'yup';

import MeetingTextField from './formComponents/MeetingTextField';
import MeetingSelect from './formComponents/MeetingSelect';
import MeetingDatePicker from './formComponents/MeetingDatePicker';
import MeetingCheckbox from './formComponents/MeetingCheckbox';
import MeetingSubmitButton from './formComponents/MeetingSubmitButton';
import MeetingTimePicker from './formComponents/MeetingTimePicker';

import countries from '../data/countries.json';

function ScheduleMeeting() {

    const INITIAL_FORM_STATE = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        country: '',
        startDate: '',
        startTime: '',
        endTime: '',
        description: '',
        tos: false,
    }

    const FORM_VALIDATION = Yup.object().shape({
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


  return (
    <Container sx={{height:'800px',marginTop: '20px', paddingTop: '20px'}}>
        <Formik
        initialValues={INITIAL_FORM_STATE}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => console.log(values)}
        >
            <Form>
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Typography >
                            Personal Details
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <MeetingTextField 
                        name='firstName'
                        label='First Name'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <MeetingTextField 
                        name='lastName'
                        label='Last Name'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <MeetingTextField 
                        name='email'
                        label='Email'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <MeetingTextField 
                        name='phone'
                        label='Phone Number'
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography>
                            Address Information
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <MeetingTextField 
                        name='address'
                        label='Address'
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <MeetingSelect 
                        name='country'
                        label='Country'
                        options={countries}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <MeetingTextField 
                        name='state'
                        label='State'
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <MeetingTextField 
                        name='city'
                        label='City'
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography>
                            Meeting Details
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <MeetingDatePicker 
                        name='startDate'    
                        label='Start date'
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <MeetingTimePicker 
                        name='startTime'    
                        label='Start time'
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <MeetingTimePicker 
                        name='endTime'    
                        label='End time'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MeetingTextField 
                        name='description'
                        label='Anything you would like me to know about our meeting?'
                        multiline={true}
                        rows={4}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MeetingCheckbox 
                        name='tos'
                        label='Agree'
                        legend='Terms of service'
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <MeetingSubmitButton>
                            Schedule Meeting
                        </MeetingSubmitButton>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    </Container>
  )
}

export default ScheduleMeeting;
