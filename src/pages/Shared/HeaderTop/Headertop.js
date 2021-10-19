import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faPinterestP, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';
import './HeaderTop.css';
import { NavLink, useHistory } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Headertop = () => {

    const historey = useHistory();

    const handleAppoinment = () => {
        historey.push("/appointment");
    }

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
                                <NavLink as={HashLink} to="#"><FontAwesomeIcon className="social-icon" icon={faFacebookF} /></NavLink>
                                <NavLink as={HashLink} to="#"><FontAwesomeIcon className="social-icon" icon={faTwitter} /></NavLink>
                                <NavLink as={HashLink} to="#"><FontAwesomeIcon className="social-icon" icon={faPinterestP} /></NavLink>
                                <NavLink as={HashLink} to="#"><FontAwesomeIcon className="social-icon" icon={faLinkedinIn} /></NavLink>
                            </div>
                            <button onClick={handleAppoinment} className="regular-btn">get a appoinment</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        // Header Top End
    );
};

export default Headertop;