import React from 'react';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import './Appointment.css'

const Appointment = () => {
    // declear use history
    const historey = useHistory();
    const handleContactBtn = () => {
        historey.push("/contact")
    }

    return (
        <>
            {/* breadcrumb start */}
            <div className="breadcrumb-bg">
                <Container>
                    <div className="breadcrumb-container d-flex justify-content-between align-items-center">
                        <h2 className="breadcrumb-title">Appointment</h2>
                        <Breadcrumb>
                            <NavLink to="/home">Home</NavLink>
                            <span>/</span>
                            <NavLink to="/appointment" activeClassName="active">
                                Appointment
                            </NavLink>
                        </Breadcrumb>
                    </div>
                </Container>
            </div>
            {/* breadcrumb end */}
            {/* appoinmtment start */}
            <div>
                <Container>
                    <Row className="bg-shadow">
                        <Col lg={6}>
                            <div className="appoinmtment-left">
                                <h2>Book An Appointment</h2>
                                <div className="d-flex appoinmtment-select">
                                    <div className="dept-select">
                                        <label htmlFor="dept">Department</label>
                                        <select name="" id="dept">
                                            <option value="dept1">-----</option>
                                            <option value="dept1">Cardiology</option>
                                            <option value="dept2">Neurology</option>
                                            <option value="dept3">Urology</option>
                                            <option value="dept4">Valve Diseases</option>
                                            <option value="dept4">Body Surgery</option>
                                            <option value="dept4">Children’s</option>
                                        </select>
                                    </div>
                                    <div className="doctor-select">
                                        <label htmlFor="doctor">Doctor</label>
                                        <select name="" id="doctor">
                                            <option value="doctor">-----</option>
                                            <option value="doctor1">Dr. Rohit</option>
                                            <option value="doctor2">Dr. Rony</option>
                                            <option value="doctor3">Dr. Eva</option>
                                            <option value="doctor4">Dr. Arup</option>
                                            <option value="doctor4">Dr. komol</option>
                                            <option value="doctor4">Dr. Megha</option>
                                            <option value="doctor4">Dr. Kajol</option>
                                            <option value="doctor4">Dr. Chad</option>
                                        </select>
                                    </div>
                                </div>
                                <input type="date" name="" id="" />
                                <input type="text" placeholder="Your Name" />
                                <input type="email" placeholder="Your Email" />
                                <input type="number" placeholder="Your Phone Number" />
                                <textarea placeholder="Your Message"></textarea>
                                <button className="regular-btn">Submit</button>
                            </div>
                        </Col>
                        <Col lg={6} className="appoinmtment-pr">
                            <div className="appoinmtment-right overlay">
                                <h4>For Emergency Cases</h4>
                                <h2>24 Hours Available</h2>
                                <p>We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.</p>
                                <button onClick={handleContactBtn} className="regular-btn">Contact Us</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* appoinmtment end */}
        </>
    );
};

export default Appointment;