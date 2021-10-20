import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './HomeAppointment.css';

const HomeAppointment = () => {

    const historey = useHistory();

    const handleAppoinment = () => {
        historey.push("/appointment");
    }


    return (
        <div className="home-appointment overlay">
            <Container>
                <Row>
                    <Col>
                        <h4>Need a Doctor for Check-up?</h4>
                        <h2>Just make an Appointment & You’re Done!</h2>
                        <h3>Get Your Quote or Call: +1 (458) 666-0125</h3>
                        <button onClick={handleAppoinment} className="regular-btn">make an appoinment</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeAppointment;