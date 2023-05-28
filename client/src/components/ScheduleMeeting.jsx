import {Box, Grid, Typography} from '@mui/material';
import {Formik, Form} from 'formik';

import FormTextField from './formComponents/FormTextField';
import FormDatePicker from './formComponents/FormDatePicker';
import FormTosCheckbox from './formComponents/FormTosCheckbox';
import FormSubmitButton from './formComponents/FormSubmitButton';
import FormTimePicker from './formComponents/FormTimePicker';

import { INITIAL_FORM_STATE, FORM_VALIDATION } from '../utils/MeetingForm';

import { useContext } from 'react';
import { EventContext } from '../context/EventContext';


function ScheduleMeeting({handleClose}) {
    const {setEvents} = useContext(EventContext);

    function handleSubmit(values){
        handleClose();
        const start = values.startDate + "T"+values.startTime+":00";
        const end = values.startDate + "T"+values.endTime+":00";
        const event = {
            id: 10,
            title: values.title,
            start,
            end,
            extendedProps: {
                location: "Online",
                description: values.description
            }
        }
        setEvents((prevEvents) => [...prevEvents, event]);
    }

  return (
    <Box sx={{height:'400px', width:'80%', marginLeft:'auto', marginRight:'auto'}}>
        <Formik
        initialValues={INITIAL_FORM_STATE}
        validationSchema={FORM_VALIDATION}
        onSubmit={handleSubmit}
        >
            <Form>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                        <FormTextField 
                        name='title'
                        label='Give our meeting a title...'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Meeting Details
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <FormDatePicker 
                        name='startDate'    
                        label='Start date'
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormTimePicker 
                        name='startTime'    
                        label='Start time'
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormTimePicker 
                        name='endTime'    
                        label='End time'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormTextField 
                        name='description'
                        label='Anything you would like me to know about our meeting?'
                        multiline={true}
                        rows={4}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormTosCheckbox 
                        name='tos'
                        label='Agree'
                        legend='Terms of service'
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormSubmitButton>
                            Schedule Meeting
                        </FormSubmitButton>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    </Box>
  )
}

export default ScheduleMeeting;
