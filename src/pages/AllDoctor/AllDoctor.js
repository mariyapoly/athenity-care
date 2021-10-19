import React from 'react';
import { Breadcrumb, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Docotor from '../Doctor/Docotor';
import './AllDoctor.css'

const AllDoctor = () => {

    const { allService } = useAuth() || {};
    const { doctores } = allService || {};


    return (
        <>
            <div className="breadcrumb-bg">
                <Container>
                    <div className="breadcrumb-container d-flex justify-content-between align-items-center">
                        <h2 className="breadcrumb-title">Our Doctors</h2>
                        <Breadcrumb>
                            <NavLink to="/home">Home</NavLink>
                            <span>/</span>
                            <NavLink to="/doctor" activeClassName="active">
                                doctors
                            </NavLink>
                        </Breadcrumb>
                    </div>
                </Container>
            </div>
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
        </>
    );
};

export default AllDoctor;