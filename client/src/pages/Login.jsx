import {Formik, Form} from 'formik';
import {Box, Typography, Grid} from '@mui/material';

import FormTextField from '../components/formComponents/FormTextField';
import FormSubmitButton from '../components/formComponents/FormSubmitButton';

import { INITIAL_FORM_STATE, FORM_VALIDATION } from '../utils/LoginForm';

function Login() {

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
                            Please enter your Login information
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
                        />
                    </Grid>
                    <Grid item xs={4} alignSelf='center'>
                        <FormSubmitButton>
                            Login
                        </FormSubmitButton>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    </Box>
  )
}

export default Login;
