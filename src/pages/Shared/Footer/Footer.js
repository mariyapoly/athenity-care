import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CopyRight from '../CopyRight/CopyRight';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <Container>
                    <Row>
                        <Col lg={5}>
                            <div className="footer-widget">
                                <NavLink className="footer-logo" to="/">Athenity Care</NavLink>
                                <p className="mb-3">Our Clinic has grown to provide a world class facility for the clinic advanced restorative dentistry.</p>
                                <p>
                                    We are among the most qualified implant providers in the AUS with over 35+ years of quality training and experience.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="footer-widget">
                                <h3>Our Services</h3>
                                <ul>
                                    <li><NavLink className="navbar-brand" to="/">Neurology</NavLink></li>
                                    <li><NavLink className="navbar-brand" to="/">Cardiology</NavLink></li>
                                    <li><NavLink className="navbar-brand" to="/">Urology</NavLink></li>
                                    <li><NavLink className="navbar-brand" to="/">Valve Diseases</NavLink></li>
                                    <li><NavLink className="navbar-brand" to="/">Body Surgery</NavLink></li>
                                    <li><NavLink className="navbar-brand" to="/">Children’s</NavLink></li>

                                </ul>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="footer-widget">
                                <h3>Opening Hours</h3>
                                <ul>
                                    <li>Mon : 9:00 AM - 9:00 PM</li>
                                    <li>Tues : 9:00 AM - 9:00 PM</li>
                                    <li> Wed : 9:00 AM - 9:00 PM</li>
                                    <li>Thurs : 9:00 AM - 9:00 PM</li>
                                    <li>Fri : 9:00 AM - 9:00 PM</li>
                                    <li>Sat : 9:00 AM - 9:00 PM</li>
                                    <li>Sunday : Closed</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <CopyRight></CopyRight>
        </>
    );
};

export default Footer;