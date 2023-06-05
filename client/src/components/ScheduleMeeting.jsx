import {Box, Grid, Typography} from '@mui/material';
import {Formik, Form} from 'formik';

import FormTextField from './formComponents/FormTextField';
import FormDatePicker from './formComponents/FormDatePicker';
import FormTosCheckbox from './formComponents/FormTosCheckbox';
import FormSubmitButton from './formComponents/FormSubmitButton';
import FormTimePicker from './formComponents/FormTimePicker';
import FormSelect from './formComponents/FormSelect';

import { INITIAL_FORM_STATE, FORM_VALIDATION } from '../utils/MeetingForm';

import { useState, useEffect } from 'react';
import { addEventRoute, getFriendsRoute } from '../utils/routes';
import { axiosPrivate } from '../utils/axios';


function ScheduleMeeting({handleClose}) {
    const [friendOptions, setFriendOptions] = useState({});
    const [loading, setLoading] = useState(true);

    async function fetchFriends(){
        await axiosPrivate.get(getFriendsRoute).then((res) =>{
            const friends = res.data;
            if (res.data.length < 1) return;
            const newFriendOptions = {};
            friends.forEach((friend) => {
                newFriendOptions[friend.id] = friend.email;
            });
            setFriendOptions(newFriendOptions);
        }).catch((err) => {
          console.log(err);
        })
        setLoading(false);
      }

      useEffect(() => {
        fetchFriends();
      }, [])

    async function handleSubmit(values){
        handleClose();
        const start = values.startDate + "T"+values.startTime+":00";
        const end = values.startDate + "T"+values.endTime+":00";
        await axiosPrivate.post(addEventRoute, {
            title: values.title,
            startDate: start,
            endDate: end,
            description: values.description,
            guest_id: values.friend
        }).then((res) => {
            console.log("event added");
        }).catch((err) => {
            console.log(err);
        });
        window.location.reload(false);
    }

  return (
    <Box sx={{height:'400px', width:'80%', marginLeft:'auto', marginRight:'auto'}}>
        {loading ? <div>Loading...</div> :  <Formik
        initialValues={INITIAL_FORM_STATE}
        validationSchema={FORM_VALIDATION}
        onSubmit={handleSubmit}
        >
            <Form>
                <Grid container spacing={2}>
                <Grid item xs={6}>
                    <FormTextField 
                    name='title'
                    label='Give our meeting a title...'
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormSelect 
                        name='friend'
                        label='Pick a friend'
                        options={friendOptions}
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
        </Formik>}
    </Box>
  )
}

export default ScheduleMeeting;
