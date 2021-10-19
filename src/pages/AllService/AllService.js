import React from 'react';
import { Breadcrumb, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Service from '../Home/Service/Service';
import './AllService.css'

const AllService = () => {

    const { allService } = useAuth() || {};
    const { services } = allService || {};


    return (
        <>
            {/* breadcrumb start */}
            <div className="breadcrumb-bg">
                <Container>
                    <div className="breadcrumb-container d-flex justify-content-between align-items-center">
                        <h2 className="breadcrumb-title">Our All Service</h2>
                        <Breadcrumb>
                            <NavLink to="/home">Home</NavLink>
                            <span>/</span>
                            <NavLink to="/service" activeClassName="active">
                                Services
                            </NavLink>
                        </Breadcrumb>
                    </div>
                </Container>
            </div>
            {/* breadcrumb end */}
            {/* allservices-area start */}
            <div className="allservices-area service-area">
                <Container>
                    <div className="section-title text-center">
                        <span>OUR SERVICES</span>
                        <h2>Special High-quality Services</h2>
                        <p>Since its founding Brivona has been providing its patients with the full medical care, encompassing outpatients services, is neurology, laboratory, imaging diagnostics and more.</p>
                    </div>
                    <Row>
                        {services.map(service => <Service
                            key={service.id}
                            service={service}></Service>)}
                    </Row>
                </Container>
            </div>
            {/* allservices-area end */}
        </>
    );
};

export default AllService;