import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import signleServient from '../../../images/single-seven.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faClock } from '@fortawesome/free-regular-svg-icons';
import './About.css';


const About = () => {
    return (
        // About Area Start
        <div className="about-area">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} sm={12} xs={12} md={12}>
                        <div className="about-thumb">
                            <img src={signleServient} alt="" />
                            <div className="experience">
                                <h2>35 <span>+</span></h2>
                                <p>Years Of <br /> Experience</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} sm={12} xs={12} md={12}>
                        <div className="about-container">
                            <div className="section-title">
                                <span>INTRODUCING</span>
                                <h2>Tackle the challenge of delivering health care</h2>
                                <p className="about-text">We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.</p>
                            </div>
                            <p>Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
                            <div className="d-flex about-footer">
                                <div className="d-flex about-inner">
                                    <FontAwesomeIcon className="about-icon" icon={faCalendarAlt} />
                                    <p>Online Appointment!</p>
                                </div>
                                <div className="d-flex about-inner">
                                    <FontAwesomeIcon className="about-icon" icon={faMapMarkerAlt} />
                                    <p>Available at Your Location</p>
                                </div>
                                <div className="d-flex about-inner">
                                    <FontAwesomeIcon className="about-icon" icon={faClock} />
                                    <p>Work Improvements</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        // About Area End
    );
};

export default About;