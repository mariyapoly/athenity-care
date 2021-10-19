import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Service from '../Home/Service/Service';
import './AllService.css'

const AllService = () => {

    const { allService } = useAuth() || {};
    const { services } = allService || {};


    return (
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
    );
};

export default AllService;