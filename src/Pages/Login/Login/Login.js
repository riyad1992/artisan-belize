// import { Alert, Button, CircularProgress, Container, Grid, TextField as input } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Sheard/Footer/Footer';
import Header from '../../Sheard/Header/Header';
// import login from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault()
    }
    const handleGoogleLogin = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div>
            <Header></Header>
            <div className='row m-2'>
                <div className='col-12 col-md-6 mt-5'>
                    <form onSubmit={handleLoginSubmit}>
                        <input id="standard-basic" label="Your Email" variant="standard" name='email' onBlur={handleOnChange} sx={{ width: '75%', m: 1 }} />
                        <input id="standard-basic" label="Your Password" variant="standard" name='password' onBlur={handleOnChange} sx={{ width: '75%', m: 1 }} type='password' />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                            {isLoading && <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </Spinner>}
                        {user?.email && <Alert variant='success'>Login successfully</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>---------------------------</p>
                    <Button onClick={handleGoogleLogin} variant="contained">Google Login</Button>
                </div>
                <div className='col-12 col-md-6'>
                    {/* <img style={{width:'100%'}} src={login} alt=''/> */}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;