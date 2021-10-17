import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        // Navbar Start
        <Navbar expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home">Athenity Care</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink activeClassName="acitve" to="/home">home</NavLink>
                        <NavLink activeClassName="acitve" to="/about">about us</NavLink>
                        <NavLink activeClassName="acitve" to="/service">services</NavLink>
                        <NavLink activeClassName="acitve" to="/team">our doctor</NavLink>
                        <NavLink activeClassName="acitve" to="/blog">blog</NavLink>
                        <NavLink activeClassName="acitve" to="/contact">contact us</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // Navbar End
    );
};

export default Navigation;