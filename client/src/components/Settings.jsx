import { Avatar, Box, Typography,Grid, IconButton } from "@mui/material";
import { Formik, Form } from "formik";

import FormTextField from "./formComponents/FormTextField";
import FormSelect from "./formComponents/FormTextField";
import FormSubmitButton from "./formComponents/FormSubmitButton";

import { INITIAL_FORM_STATE, FORM_VALIDATION } from "../utils/SettingsForm";

import countries from '../data/countries.json';

function Settings() {

    function handleSubmit(values){
        console.log(values);
    }

  return (
    <Box>
        <Formik
        validationSchema={FORM_VALIDATION}
        initialValues={INITIAL_FORM_STATE}
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
                        label='Phone Number'
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
                        label='Password'
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
    </Box>
  )
}

export default Settings;
