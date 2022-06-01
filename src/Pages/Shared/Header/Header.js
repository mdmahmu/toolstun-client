
import { signOut } from "firebase/auth";
import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from '../../../Images/logo.png';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <header>
            <nav>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand as={NavLink} to="/"><img src={logo} alt="logo" className="w-75" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                                <Nav.Link as={NavLink} to="/all_tools">All tools</Nav.Link>
                                <Nav.Link as={NavLink} to="/blogs">Blogs</Nav.Link>
                                <Nav.Link as={NavLink} to="/my_portfolio">My Portfolio</Nav.Link>
                            </Nav>
                            <Nav>
                                {user ?
                                    <>
                                        <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                                        <Nav.Link as={NavLink} to="/login" onClick={() => signOut(auth)}>Log out</Nav.Link>
                                    </> : <>
                                        <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                                        <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                                    </>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </header>
    );
};

export default Header;