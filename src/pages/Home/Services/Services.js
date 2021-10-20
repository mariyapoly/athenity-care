import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const { allService } = useAuth() || {};
    const { services } = allService || {};

    const allServices = services.slice(0, 6)

    return (
        // service area start
        <div className="service-area">
            <Container>
                <Row>
                    <div className="section-title text-center">
                        <span>OUR SERVICES</span>
                        <h2>Special High-quality Services</h2>
                        <p>Since its founding Brivona has been providing its patients with the full medical care, encompassing outpatients services, is neurology, laboratory, imaging diagnostics and more.</p>
                    </div>


                    {
                        allServices.map(service => <Service
                            key={service.id}
                            service={service}></Service>)
                    }
                </Row>
            </Container>
        </div>
        // service area end
    );
};

export default Services;