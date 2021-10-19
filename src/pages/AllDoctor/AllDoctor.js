import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Docotor from '../Doctor/Docotor';
import './AllDoctor.css'

const AllDoctor = () => {

    const { allService } = useAuth() || {};
    const { doctores } = allService || {};


    return (
        <div className="doctor-area">
            <Container>
                <Row>
                    {
                        doctores.map(doctor => <Docotor
                            key={doctor.id}
                            doctor={doctor}></Docotor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllDoctor;