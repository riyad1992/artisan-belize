
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Sheard/Footer/Footer';
import Header from '../../Sheard/Header/Header';
import register from '../../../images/register.jpg'

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
            <div className='row m-1 mb-5 mt-5'>
                <div className='col-12 col-md-6'>
                    <form onSubmit={handleRegisterSubmit}>
                        <input id="standard-basic" label="Your Name" variant="standard" placeholder='Your Name' name='name' required onBlur={handleOnBlur} style={{ width: '75%', margin: '10px' }} />
                        <br/>

                        <input id="standard-basic" label="Your Email" variant="standard" placeholder='Your Email' name='email' required type='email' onBlur={handleOnBlur} style={{ width: '75%', margin: '10px' }} />
                        <br/>

                        <input id="standard-basic" label="Your Password" variant="standard" placeholder='Your Password' name='password' required onBlur={handleOnBlur} style={{ width: '75%', margin:'10px' }} type='password' />
                        <br/>

                        <input id="standard-basic" label="Confirm Your Password" variant="standard" placeholder='Confirm Your Password' name='password2' onBlur={handleOnBlur} style={{ width: '75%', margin: '10px' }} type='password' />
                        <br/>
                        
                        <Button style={{ width: '75%', margin: '10px' }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <p variant="text">Already Register? Please Login</p>
                        </NavLink>
                        {isLoading && <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </Spinner>}
                    {user?.email && <Alert variant='success'>Register successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                </div>
                <div className='col-12 col-md-6'>
                    <img style={{width:'100%'}} src={register} alt=''/>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;