import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Docotor from '../Doctor/Docotor';
import './Doctors.css'

const Doctors = () => {

    const { allService } = useAuth() || {};
    const { doctores } = allService || {};

    const ourDoctors = doctores.slice(0, 3);

    return (
        // doctor area start
        <div className='docters-area'>
            <Container>
                <Row>
                    <div className="section-title">
                        <span>MEET OUR EXPERIENCED TEAM</span>
                        <h2>Our Dedicated Doctors Team</h2>
                        <p>We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our staff, We are all work together to help our all patients for recovery</p>
                    </div>
                    {
                        ourDoctors.map(doctor => <Docotor
                            key={doctor.id}
                            doctor={doctor}></Docotor>)
                    }
                </Row>
            </Container>
        </div>
        // doctor area end
    );
};

export default Doctors;