import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { Button, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from "formik";
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from "yup";

interface ILogInForm{
    email : string;
    password: string;
}

function Login() {
    const loginForm = useFormik<ILogInForm>({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email:Yup.string().email("Must be valid email").required("Please fill Email field"),
            password:Yup.string().max(15,"Password must be less than 15 characters").min(8,"Password must be more than 8 characters long").required("Please fill Password field")
        }),
        onSubmit :(values : ILogInForm)=>{
            console.log(loginForm);
            console.log(values);
        }
    })
    return (
        <Box>
            <form  style={{width:"100%"}} className="centreFlex my-4" onSubmit={loginForm.handleSubmit}>
                
            <Stack className='border' spacing={2} sx={{width:{xs:"90%",md:"50%"}}}>

            <Typography className="section-head" variant="overline" fontSize="large">
              LogIn
            </Typography>

            <TextField
                error={(loginForm.touched.email && loginForm.errors.email && true) || false}
                label="Email"
                helperText={loginForm.errors.email}
                onBlur={loginForm.handleBlur}
                onChange={loginForm.handleChange}
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
                error={(loginForm.touched.password && loginForm.errors.password && true) || false}
                label="Password"
                helperText={loginForm.errors.password}
                onBlur={loginForm.handleBlur}
                onChange={loginForm.handleChange}
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

            <Button disabled={!(loginForm.dirty && loginForm.isValid)} type="submit" fullWidth variant="contained">Login</Button>

            <Stack className='fCenter' direction="row" spacing={2} >
                <Typography component="span" variant="subtitle2">Not having a account?</Typography>
                <Link to="/signup">
                  SignUp
                </Link>
            </Stack>

            </Stack>
            </form>
        </Box>
    )
}

export default Login;