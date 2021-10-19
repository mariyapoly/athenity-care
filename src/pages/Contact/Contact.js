import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import contactThumb from '../../images/appointment.jpg';


<i class="fas "></i>

const Contact = () => {
    return (
        <div>
            <Container>
                <Row className="contact-area">
                    <Col lg={4}>
                        <div className="single-contact">
                            <p className="contact">
                                <FontAwesomeIcon className="contact-icon" icon={faPhoneAlt} />
                            </p>
                            <h3>phone number</h3>
                            <p>+1 (325) 555-0125</p>
                            <p>+1 (458) 666-0125</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="single-contact">
                            <p className="contact"> <FontAwesomeIcon className="contact-icon" icon={faEnvelope} /></p>
                            <h3>email us</h3>
                            <p>athenity@care.com</p>
                            <p>athenity@hospital.com</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="single-contact">
                            <p className="contact"><FontAwesomeIcon className="contact-icon" icon={faMapMarkerAlt} /></p>
                            <h3>address</h3>
                            <p> 234 Triumph, Los Angeles, California, US</p>
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center contact-feild">
                    <Col lg={7}>
                        <div className="contact-form">
                            <div className="section-title">
                                <h2>Contact With Us Or Email Us</h2>
                            </div>
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <input type="text" placeholder="Subject" />
                            <input type="number" placeholder="Your Phone Number" />
                            <textarea placeholder="Your Message"></textarea>
                            <button className="regular-btn">Submit</button>
                        </div>
                    </Col>
                    <Col lg={5} className="appoinmtment-pr">
                        <div className="contact-thumb">
                            <img src={contactThumb} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;