import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './CopyRight.css'

const CopyRight = () => {
    return (
        <div className="copyright">
            <Container>
                <Row>
                    <Col>
                        <p>Copyright &copy; 2021 Athenity Care</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CopyRight;