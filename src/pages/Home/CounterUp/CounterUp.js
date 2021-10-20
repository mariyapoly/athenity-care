import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faUsers, faHospitalAlt, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import './CounterUp.css'



const CounterUp = () => {
    return (
        <div className="counter-bg">
            <Container>
                <Row>
                    <Col lg={3} xs={12} sm={6}>
                        <div className="single-counter">
                            <FontAwesomeIcon className="count-icon" icon={faTrophy} />
                            <CountUp delay={5} duration={3} end={201} />
                            <p>Award Shows</p>
                        </div>
                    </Col>
                    <Col lg={3} xs={12} sm={6}>
                        <div className="single-counter">
                            <FontAwesomeIcon className="count-icon" icon={faUsers} />
                            <CountUp delay={5} duration={3} end={354} />
                            <p>Qualified Staff</p>
                        </div>
                    </Col>
                    <Col lg={3} xs={12} sm={6}>
                        <div className="single-counter">
                            <FontAwesomeIcon className="count-icon" icon={faHospitalAlt} />
                            <CountUp delay={5} duration={3} end={528} />
                            <p>Hospital Rooms</p>
                        </div>
                    </Col>
                    <Col lg={3} xs={12} sm={6}>
                        <div className="single-counter">
                            <FontAwesomeIcon className="count-icon" icon={faHeartbeat} />
                            <CountUp delay={5} duration={3} end={124} />
                            <p>Machines</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default CounterUp;