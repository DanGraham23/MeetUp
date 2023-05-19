import {Container, Grid, Typography} from '@mui/material';
import {Formik, Form} from 'formik';

import MeetingTextField from './formComponents/MeetingTextField';
import MeetingSelect from './formComponents/MeetingSelect';
import MeetingDatePicker from './formComponents/MeetingDatePicker';
import MeetingCheckbox from './formComponents/MeetingCheckbox';
import MeetingSubmitButton from './formComponents/MeetingSubmitButton';
import MeetingTimePicker from './formComponents/MeetingTimePicker';

import { INITIAL_FORM_STATE, FORM_VALIDATION } from '../utils/MeetingForm';

import countries from '../data/countries.json';

function ScheduleMeeting() {

  return (
    <Container sx={{height:'800px',marginTop: '60px', paddingTop: '20px'}}>
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
