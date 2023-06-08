import {Formik, Form} from 'formik';
import {Box, Typography, Grid, Link} from '@mui/material';

import FormTextField from '../components/formComponents/FormTextField';
import FormSubmitButton from '../components/formComponents/FormSubmitButton';

import { INITIAL_FORM_STATE, FORM_VALIDATION } from '../utils/LoginForm';

import axios from '../utils/axios';
import {loginRoute} from '../utils/routes';

import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    const {auth, setAuth} = useContext(AuthContext);

  async function handleSubmit(values){
    await axios.post(loginRoute, {
        email:values.email,
        password:values.password
    }).then((res) => {
        setAuth({
            id: res.data,
            isLoggedIn: true,
        });
        localStorage.setItem("meetup-user", JSON.stringify(res.data));
    }).catch((err) => {
        console.log(err);
    });
  }

  useEffect(() => {
    if (localStorage.getItem("meetup-user")!== null){
        navigate('/dashboard/calendar');
    }
}, [auth.isLoggedIn]);

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
                        variant='standard'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormTextField 
                        name='password'
                        label='Password'
                        type='password'
                        variant='standard'
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
        <Link href='/register'>New member? Click here to register instead!</Link>
    </Box>
  )
}

export default Login;
