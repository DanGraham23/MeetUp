import { Formik, Form } from 'formik';
import { INITIAL_FORM_STATE, FORM_VALIDATION } from '../utils/RegisterForm';
import { Box, Typography, Grid, Link } from '@mui/material';

import FormTextField from '../components/formComponents/FormTextField';
import FormSelect from '../components/formComponents/FormSelect';
import FormSubmitButton from '../components/formComponents/FormSubmitButton';

import countries from '../data/countries.json';

import axios from '../utils/axios';
import { registerRoute } from '../utils/routes';

import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);

  async function handleSubmit(values) {
    await axios
      .post(registerRoute, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        phoneNumber: values.phone,
        address: values.address,
        city: values.city,
        state: values.state,
        country: values.country,
      })
      .then((res) => {
        setAuth({
          id: res.data,
          isLoggedIn: true,
        });
        localStorage.setItem('meetup-user', JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (localStorage.getItem('meetup-user') !== null) {
      navigate('/dashboard/calendar');
    }
  }, [auth.isLoggedIn]);

  return (
    <Box
      sx={{
        height: '500px',
        width: '40%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Formik
        initialValues={INITIAL_FORM_STATE}
        validationSchema={FORM_VALIDATION}
        onSubmit={handleSubmit}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                align="center"
                variant="h4"
                marginTop="50px"
                marginBottom="50px"
              >
                Welcome To MeetUp
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography>Login Credentials</Typography>
            </Grid>
            <Grid item xs={6}>
              <FormTextField name="email" label="Email" variant="standard" />
            </Grid>
            <Grid item xs={6}>
              <FormTextField
                name="password"
                label="Password"
                type="password"
                variant="standard"
              />
            </Grid>

            <Grid item xs={12}>
              <Typography>Personal Details</Typography>
            </Grid>
            <Grid item xs={4}>
              <FormTextField
                name="firstName"
                label="First Name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={4}>
              <FormTextField
                name="lastName"
                label="Last Name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={4}>
              <FormTextField
                name="phone"
                label="Phone Number"
                variant="standard"
              />
            </Grid>

            <Grid item xs={12}>
              <Typography>Address Information</Typography>
            </Grid>
            <Grid item xs={12}>
              <FormTextField
                name="address"
                label="Address"
                variant="standard"
              />
            </Grid>
            <Grid item xs={4}>
              <FormSelect
                name="country"
                label="Country"
                options={countries}
                variant="standard"
              />
            </Grid>
            <Grid item xs={4}>
              <FormTextField name="state" label="State" variant="standard" />
            </Grid>
            <Grid item xs={4}>
              <FormTextField name="city" label="City" variant="standard" />
            </Grid>
            <Grid item xs={4} alignSelf="center">
              <FormSubmitButton>Register</FormSubmitButton>
            </Grid>
          </Grid>
        </Form>
      </Formik>
      <Link href="/login">Already a member? Click here to login instead!</Link>
    </Box>
  );
}

export default Register;
