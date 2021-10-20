import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'

const Navigation = () => {

    const { allContext } = useAuth() || {};
    const { logOut, user } = allContext || {};



    return (
        // Navbar Start
        <Navbar expand="lg" sticky="top">
            <Container>
                <NavLink className="navbar-brand" to="/">Athenity Care</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink activeClassName="acitve" to="/home">home</NavLink>
                        <NavLink activeClassName="acitve" to="/about">about us</NavLink>
                        <NavLink activeClassName="acitve" to="/service">services</NavLink>
                        <NavLink activeClassName="acitve" to="/doctor">our doctor</NavLink>
                        <NavLink activeClassName="acitve" to="/contact">contact us</NavLink>
                        {
                            user.email ? <div><span className="name">{user.displayName}</span> <button className="logout-btn" onClick={logOut}>logout</button></div>
                                :
                                <NavLink activeClassName="acitve" to="/login">login</NavLink>
                        }
                        <NavLink activeClassName="acitve" to="/signup">signup</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // Navbar End
    );
};

export default Navigation;