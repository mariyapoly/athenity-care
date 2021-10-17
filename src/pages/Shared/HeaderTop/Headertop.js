import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faPinterestP, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';
import './HeaderTop.css'


const Headertop = () => {
    return (
        // Header Top Start
        <div className="header-top">
            <Container>
                <Row className="align-items-center">
                    <Col lg={8}>
                        <ul className="d-flex athenity-care-container">
                            <li><FontAwesomeIcon className="left-icon" icon={faMapMarkerAlt} /> 234 Triumph, Los Angeles, California, US</li>
                            <li><FontAwesomeIcon className="left-icon" icon={faClock} /> Mon - Sat 8.00 - 18.00. <span>Sunday CLOSED</span></li>
                        </ul>
                    </Col>
                    <Col lg={4}>
                        <div className="d-flex align-items-center justify-content-end">
                            <div className="athenity-care-social-link">
                                <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
                                <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                                <FontAwesomeIcon className="social-icon" icon={faPinterestP} />
                                <FontAwesomeIcon className="social-icon" icon={faLinkedinIn} />
                            </div>
                            <button className="regular-btn">get a appoinment</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        // Header Top End
    );
};

export default Headertop;