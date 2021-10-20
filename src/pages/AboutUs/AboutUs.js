import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import About from '../Home/About/About';

const AboutUs = () => {
    return (
        <>
            {/* breadcrumb area strart */}
            <div className="breadcrumb-bg">
                <Container>
                    <div className="breadcrumb-container d-flex justify-content-between align-items-center">
                        <h2 className="breadcrumb-title">About Us</h2>
                        <Breadcrumb>
                            <NavLink to="/home">Home</NavLink>
                            <span>/</span>
                            <NavLink to="/about" activeClassName="active">
                                abou us
                            </NavLink>
                        </Breadcrumb>
                    </div>
                </Container>
            </div>
            {/* breadcrumb area end */}
            <About></About>
        </>
    );
};

export default AboutUs;