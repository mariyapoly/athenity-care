import React from 'react';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './SingleService.css';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const SingleService = ({ depeartment }) => {

    const { id, serviceDes, serviceName, serviceThumb } = depeartment || {};

    const history = useHistory();
    const handleAppointmentBtn = () => {
        history.push("/appointment");
    }

    return (
        <div>
            <div className="breadcrumb-bg">
                <Container>
                    <div className="breadcrumb-container d-flex justify-content-between align-items-center">
                        <h2 className="breadcrumb-title">{serviceName} Service</h2>
                        <Breadcrumb>
                            <NavLink to="/home">Home</NavLink>
                            <span>/</span>
                            <NavLink to={`/services/service/${id}`} activeClassName="active">
                                {serviceName} Service
                            </NavLink>
                        </Breadcrumb>
                    </div>
                </Container>
            </div>
            <div className="single-service">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={8}>
                            <div className="single-service-thumb">
                                <img src={serviceThumb} alt="" />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <h2>Our {serviceName} Service</h2>
                            <p>{serviceDes}</p>
                            <h3>Healthcare Process</h3>
                            <ul>
                                <li><FontAwesomeIcon icon={faCheck} className="check-icon" />Keeping healthy (prevention)</li>
                                <li><FontAwesomeIcon icon={faCheck} className="check-icon" />Detecting health problems</li>
                                <li><FontAwesomeIcon icon={faCheck} className="check-icon" />Diagnosing diseases</li>
                                <li><FontAwesomeIcon icon={faCheck} className="check-icon" />Treating diseases</li>
                                <li><FontAwesomeIcon icon={faCheck} className="check-icon" />Providing for a good end of life</li>
                            </ul>
                            <button onClick={handleAppointmentBtn} className="regular-btn">make an Appointment</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default SingleService;