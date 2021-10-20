import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Doctor.css'

const Docotor = ({ doctor }) => {

    const { id, doctorName, doctorThumb, role } = doctor || {};

    const historey = useHistory();

    const handleService = () => {
        historey.push(`/doctors/doctor/${id}`)
    }

    return (
        <Col lg={4}>
            <div className="single-Doctor">
                <img src={doctorThumb} alt="" />
                <p>{role}</p>
                <h5>{doctorName}</h5>
                <button onClick={handleService} >read more</button>
            </div>
        </Col>
    );
};

export default Docotor;