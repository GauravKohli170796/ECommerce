import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { Button, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from "formik";
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from "yup";


enum Gender{
    Default="",
    Male="Male",
    Female="Female"
}

interface ISignUpForm{
    email : string;
    password: string;
    confirmPassword:string;
    gender: Gender;
    phoneNumber:number | string;

}

function SignUp() {
    const signUpForm = useFormik<ISignUpForm>({
        initialValues: {
            email: "",
            password: "",
            confirmPassword:"",
            gender:Gender.Default,
            phoneNumber:""
        },
        validationSchema: Yup.object({
            email:Yup.string().email("Email must be valid email").required("Please fill Email field"),
            password:Yup.string().max(15,"Password must be less than 15 characters").min(8,"Password must be more than 8 characters long").required("Please fill Password field"),
            confirmPassword:Yup.string().oneOf([Yup.ref('password'), null], "Passwords don't match!"),
            phoneNumber:Yup.string().min(10,"Phone Number must be 10 digits").max(10,"Phone Number must be 10 digits").required("Please fill Phone Number field")
        }),
        onSubmit :(values : ISignUpForm)=>{
            console.log(values);
        }
    })
    return (
        <Box>
            <form style={{width:"100%"}} className="centreFlex my-4" onSubmit={signUpForm.handleSubmit}>
                
            <Stack className='border' spacing={2} sx={{width:{xs:"90%",md:"50%"}}}>

            <Typography className="section-head" variant="overline" fontSize="large">
              SignUp
            </Typography>

            <TextField
                error={(signUpForm.touched.email && signUpForm.errors.email && true) || false}
                label="Email"
                helperText={signUpForm.errors.email}
                onBlur={signUpForm.handleBlur}
                onChange={signUpForm.handleChange}
                name="email"
                fullWidth
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
            /> 

            <TextField
                error={(signUpForm.touched.password && signUpForm.errors.password && true) || false}
                label="Password"
                helperText={signUpForm.errors.password}
                onBlur={signUpForm.handleBlur}
                onChange={signUpForm.handleChange}
                name="password"
                type="password"
                fullWidth
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <KeyIcon />
                      </InputAdornment>
                    ),
                  }}
            /> 

            <TextField
                error={(signUpForm.touched.confirmPassword && signUpForm.errors.confirmPassword && true) || false}
                label="Confirm Password"
                helperText={signUpForm.errors.confirmPassword}
                onBlur={signUpForm.handleBlur}
                onChange={signUpForm.handleChange}
                name="confirmPassword"
                type="password"
                fullWidth
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <KeyIcon />
                      </InputAdornment>
                    ),
                  }}
            /> 

            <TextField
                error={(signUpForm.touched.phoneNumber && signUpForm.errors.phoneNumber && true) || false}
                label="Phone Number"
                type="number"
                helperText={signUpForm.errors.phoneNumber}
                onBlur={signUpForm.handleBlur}
                onChange={signUpForm.handleChange}
                name="phoneNumber"
                fullWidth
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneAndroidIcon />
                      </InputAdornment>
                    ),
                  }}
            /> 

            <Button disabled={!(signUpForm.dirty && signUpForm.isValid)} type="submit" fullWidth variant="contained">SignUp</Button>
            <Stack className='fCenter' direction="row" spacing={2} >
                <Typography component="span" variant="subtitle2">Already have a account?</Typography>
                <Link to="/Login">
                LogIn
                </Link>
            </Stack>

            </Stack>
            </form>
        </Box>
    )
}

export default SignUp;