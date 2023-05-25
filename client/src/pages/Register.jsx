import {Formik, Form} from 'formik';
import {INITIAL_FORM_STATE, FORM_VALIDATION} from '../utils/RegisterForm';
import {Box, Typography, Grid} from '@mui/material';

import FormTextField from '../components/formComponents/FormTextField';
import FormSelect from '../components/formComponents/FormSelect';
import FormSubmitButton from '../components/formComponents/FormSubmitButton';

import countries from '../data/countries.json';

function Register() {

  function handleSubmit(values){
    console.log(values);
}

  return (
    <Box sx={{height:'500px', width:'40%', marginLeft:'auto', marginRight:'auto'}}>
        <Formik
        initialValues={INITIAL_FORM_STATE}
        validationSchema={FORM_VALIDATION}
        onSubmit={handleSubmit}
        >
            <Form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography align='center' variant='h4' marginTop='50px' marginBottom='50px'>
                            Welcome To MeetUp
                        </Typography>
                    </Grid>
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
                    <Grid item xs={4} alignSelf='center'>
                        <FormSubmitButton>
                            Register
                        </FormSubmitButton>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    </Box>
  )
}

export default Register;
