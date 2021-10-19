import React from 'react';
import { Col } from 'react-bootstrap';
import './Doctor.css'

const Docotor = ({ doctor }) => {

    const { doctorName, doctorThumb, role } = doctor || {};

    return (
        <Col lg={4}>
            <div className="single-Doctor">
                <img src={doctorThumb} alt="" />
                <p>{role}</p>
                <h5>{doctorName}</h5>
            </div>
        </Col>
    );
};

export default Docotor;