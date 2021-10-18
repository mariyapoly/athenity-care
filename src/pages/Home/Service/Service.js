import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'

const Service = ({ service }) => {

    const { id, serviceDes, serviceName, serviceThumb } = service || {};

    const historey = useHistory();

    const handleService = () => {
        historey.push(`/service/${id}`)
    }

    return (
        <Col lg={4} sm={12} xs={12} md={6}>
            <div className="service">
                <div className="service-thumb">
                    <img src={serviceThumb} alt="" />
                </div>
                <div className="service-container">
                    <h4>{serviceName}</h4>
                    <p>{serviceDes}</p>
                    <button onClick={handleService} >read more</button>
                </div>
            </div>
        </Col>
    );
};

export default Service;