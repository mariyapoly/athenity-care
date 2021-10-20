import React from 'react';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faPinterestP, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { HashLink } from 'react-router-hash-link';
import './SingleDoctor.css'

const SingleDoctor = ({ doc }) => {

    const { id, doctorName, doctorThumb, role } = doc || {};

    const history = useHistory();

    const handleAppointmentBtn = () => {
        history.push("/appointment");
    }

    return (
        <div>
            {/*breadcrumb-bg start */}
            <div className="breadcrumb-bg">
                <Container>
                    <div className="breadcrumb-container d-flex justify-content-between align-items-center">
                        <h2 className="breadcrumb-title">{doctorName}</h2>
                        <Breadcrumb>
                            <NavLink to="/home">Home</NavLink>
                            <span>/</span>
                            <NavLink to={`/doctors/doctor/${id}`} activeClassName="active">
                                {doctorName}
                            </NavLink>
                        </Breadcrumb>
                    </div>
                </Container>
            </div>
            {/* breadcrumb-bg end */}
            {/* single-service start */}
            <div className="single-service">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="single-service-thumb">
                                <img src={doctorThumb} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="doctor-details">
                                <h2>{doctorName} </h2>
                                <p>{role} Specialist</p>
                                <p>Phone :+1800 200 14567 8</p>
                                <p>Email :info@example.com</p>
                                <p>Address Info :24 Fifth st., Los Angeles, USA</p>
                                <div>
                                    <NavLink as={HashLink} to="#"><FontAwesomeIcon className="doctor-icon" icon={faFacebookF} /></NavLink>
                                    <NavLink as={HashLink} to="#"><FontAwesomeIcon className="doctor-icon" icon={faTwitter} /></NavLink>
                                    <NavLink as={HashLink} to="#"><FontAwesomeIcon className="doctor-icon" icon={faPinterestP} /></NavLink>
                                    <NavLink as={HashLink} to="#"><FontAwesomeIcon className="doctor-icon" icon={faLinkedinIn} /></NavLink>
                                </div>
                                <button onClick={handleAppointmentBtn}
                                    className="regular-btn">make an Appointment</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* single-service end */}

        </div>
    );
};

export default SingleDoctor;