import { Avatar, Box, Typography,Grid, IconButton, Stack } from "@mui/material";
import { Formik, Form } from "formik";

import FormTextField from "../components/formComponents/FormTextField";
import FormSelect from "../components/formComponents/FormSelect";
import FormSubmitButton from "../components/formComponents/FormSubmitButton";
import DashboardView from "../components/DashboardView";

import { FORM_VALIDATION } from "../utils/SettingsForm";

import countries from '../data/countries.json';

import { axiosPrivate } from "../utils/axios";
import { getUserRoute, updateUserRoute } from "../utils/routes";
import { useEffect, useState } from "react";

function Settings() {
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        country: '',
      });

      const [loading, setLoading] = useState(true);

    async function handleSubmit(values){
        await axiosPrivate.put(updateUserRoute, {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            phoneNumber: values.phone,
            address: values.address,
            city: values.city,
            state: values.state,
            country: values.country,
        }).then((res) => {
            console.log("updated settings");
        }).catch((err) => {
            console.log(err);
        });
    }

    async function fetchUser(){
        await axiosPrivate.get(getUserRoute).then((res) => {
            setUserDetails((prev) => ({
                ...prev,
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email,
                phone: res.data.phoneNumber,
                address: res.data.address,
                city: res.data.city,
                state: res.data.state,
                country: res.data.country,
              }));
              setLoading(false);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        if (userDetails.email === ''){
            fetchUser();
        }
    },[]) 

    const INITIAL_FORM_VALUES = {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        email: userDetails.email,
        phone: userDetails.phone,
        address: userDetails.address,
        city: userDetails.city,
        state: userDetails.state,
        country: userDetails.country,
    }


  return (
    <DashboardView>
        {loading ? <div>Loading...</div> : <Box>
        <Formik
        validationSchema={FORM_VALIDATION}
        initialValues={INITIAL_FORM_VALUES}
        onSubmit={handleSubmit}
        >
            <Form>
                <IconButton size="medium" aria-label="upload profile avatar">
                    <Avatar 
                    alt='John Doe' 
                    src="https://material-ui.com/static/images/avatar/1.jpg" 
                    sx={{ width: 150, height: 150}}/>
                </IconButton>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography >
                            Personal Details
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <FormTextField 
                        name='firstName'
                        label='First Name'
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormTextField 
                        name='lastName'
                        label='Last Name'
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormTextField 
                        name='phone'
                        label='Phone'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Address Information
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <FormTextField 
                        name='address'
                        label='Address'
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormSelect 
                        name='country'
                        label='Country'
                        options={countries}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormTextField 
                        name='state'
                        label='State'
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormTextField 
                        name='city'
                        label='City'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            Login Credentials
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <FormTextField 
                        name='email'
                        label='Email'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormTextField 
                        name='password'
                        label='Current Password'
                        type='password'
                        />
                    </Grid>
                    <Grid item xs={4} alignSelf='center'>
                        <FormSubmitButton>
                            Apply Changes
                        </FormSubmitButton>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    </Box>}
    </DashboardView>
  )
}

export default Settings;
