import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {

    const historey = useHistory();
    const handleBackHome = () => {
        historey.push("/")
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="not-found">
                            <h1>404</h1>
                            <h3>Whoops! This Page Does Not Exist</h3>
                            <p>We can't seem to find the page that you're looking for, the link you followed might have been broken, it is temporarily unavailable. or it appears the website address you entered was incorrect.</p>
                            <button onClick={handleBackHome} className="regular-btn">Back To Home</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;