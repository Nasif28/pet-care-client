import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../../Hooks/useAuth';
import './Header.css'; // Import the custom CSS file

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" className="custom-navbar">
                <Container>
                    <Navbar.Brand href="/home" className="fw-bolder text-success custom-brand">PET CARE</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        <Nav className="mx-auto">
                            <Nav.Link as={HashLink} to="/home#home" className="custom-nav-link">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services" className="custom-nav-link">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#clients" className="custom-nav-link">Clients</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#welcome" className="custom-nav-link">Welcome</Nav.Link>
                            <Nav.Link as={HashLink} to="/vats#vats" className="custom-nav-link">Vats</Nav.Link>
                            <Nav.Link as={HashLink} to="/about#about" className="custom-nav-link">About</Nav.Link>
                        </Nav>
                        {user?.email ? (
                            <Navbar.Text className=" d-flex align-items-center">
                                <span className="me-2">Signed in as:</span>
                                <a href="#login" className="fw-bold text-decoration-none">{user?.displayName}</a>
                                {user?.photoURL ? (
                                    <img className="mx-3 border border-success border-2 rounded-circle" src={user?.photoURL} width="40" height="40" alt="User" />
                                ) : (
                                    <img className="mx-3 border border-success border-2 rounded-circle" src={'https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/scared-cartoon-face-expression_XkDKCZ_SB_PM.jpg'} width="40" height="40" alt="User" />
                                )}
                                <Button onClick={logOut} className="btn fw-bolder btn-success ms-3">Logout</Button>
                            </Navbar.Text>
                        ) : (
                            <Nav.Link as={Link} to="/login" className="custom-nav-link">Login</Nav.Link>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
