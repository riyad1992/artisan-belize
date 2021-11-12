// import { Alert, Button, CircularProgress, Container, Grid, TextField } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Sheard/Footer/Footer';
import Header from '../../Sheard/Header/Header';
// import register from '../../../images/login.png'

const Register = () => {
    const [registerData, setRegisterData] = useState({})
    const { user, registerUser, isLoading, authError, logout } = useAuth();
    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }
    const handleRegisterSubmit = e => {
        if (registerData.password !== registerData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(registerData.email, registerData.password, registerData.name, history);
        logout()
        e.preventDefault()
    }
    return (
        <div>
            <Header></Header>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <form onSubmit={handleRegisterSubmit}>
                        <input id="standard-basic" label="Your Name" variant="standard" name='name' onBlur={handleOnBlur} sx={{ width: '75%', m: 1 }} />

                        <input id="standard-basic" label="Your Email" variant="standard" name='email' type='email' onBlur={handleOnBlur} sx={{ width: '75%', m: 1 }} />

                        <input id="standard-basic" label="Your Password" variant="standard" name='password' onBlur={handleOnBlur} sx={{ width: '75%', m: 1 }} type='password' />

                        <input id="standard-basic" label="Confirm Your Password" variant="standard" name='password2' onBlur={handleOnBlur} sx={{ width: '75%', m: 1 }} type='password' />
                        
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Register? Please Login</Button>
                        </NavLink>
                        {isLoading && <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </Spinner>}
                    {user?.email && <Alert variant='success'>Register successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                </div>
                <div className='col-12 col-md-6'>
                    {/* <img style={{width:'100%'}} src={register} alt=''/> */}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;