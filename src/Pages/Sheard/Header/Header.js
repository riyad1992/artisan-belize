
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import { HashLink } from 'react-router-hash-link';
// import logo from '../../../images/atlanta-logo.png'
import './Header.css'

const Header = () => {
    const {user, logout} = useAuth()
    const [hasScrolled, setScrolled] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 50){
            setScrolled(true);
        }else {
            setScrolled(false)
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <>
            <Navbar className={hasScrolled ? 'navbar headerScrolled': 'navbar'} variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className='text-primary' as={Link} to='/home'>Artisan Belize</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        {
                            user?.email ?<Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>:''
                        }
                        {/* {
                            user?.email ?<Nav.Link style={{fontSize:'14px'}} as={Link} to="/allbooking">Manage all booking</Nav.Link>:''
                        }
                        {
                            user?.email ?<Nav.Link style={{fontSize:'14px'}} as={Link} to="/addservice">Add New Service</Nav.Link>:''
                        } */}
                        {user?.email ?
                            <Nav.Link  onClick={logout} variant="light">Logout</Nav.Link> :
                            <Nav.Link  as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text className='text-warning'><i className="fas fa-user-plus"></i> <a className='text-info' style={{fontSize:'14px'}} href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;