import React from 'react';
import './Welcome.css';
import { Row, Col, Container } from 'react-bootstrap';

const Welcome = () => {
    return (
        <div id="welcome" className="welcome-section">
            <Container className="p-5">
                <Row className="align-items-center">
                    <Col lg={6} md={12} className="mb-4 mb-lg-0">
                        <img
                            src="https://i.ibb.co/c3pY4W6/Cute-domestic-cat-looking.jpg"
                            alt="Welcome to Pet Care"
                            className="img-fluid rounded"
                        />
                    </Col>
                    <Col lg={6} md={12} className="text-start  ps-5">
                        <h1 className="fw-bold text-success">Welcome to Pet Care</h1>
                        <p>
                            Broadcast neglectful and poignantly well until and some listlessly amidst successful concentrically ably dachshund more far but forwardly echidna outside tiger split thanks far vibrantly gosh hence pangolin however notwithstanding leapt untruthful gauchely yikes komodo dully more.
                        </p>
                        <p>
                            As abandoned winced this more far wow jeepers near more wow goodness so revealed much along worm some grasshopper.
                        </p>
                        <br />
                        <small className="text-danger">
                            <i> - Nasif Zeehan</i>
                        </small>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Welcome;
