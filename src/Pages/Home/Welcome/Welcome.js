import React from 'react';
import './Welcome.css';
import { Row, Col } from 'react-bootstrap';

const Welcome = () => {
    return (
        <div id="welcome" className="welcome">
            <Row className="container-fluid p-5">
                <Col className="col-lg-6 col-md-12">
                    <img src={'https://amplifythemes.com/petenica/wp-content/uploads/2018/03/image-3.jpg'} alt="" />
                </Col>
                <Col className="col-lg-6 col-md-12 text-start pt-5 ps-5 text-white">
                    <h1 className="fw-bold text-success">Welcome to Pet Care</h1>
                    <p>Broadcast neglectful and poignantly well until and some listlessly amidst suc cessful concentrically ably dachshund more far but forwardly echidna outside tiger split thanks far vibrantly gosh hence pangolin however notwithstanding leapt untruthful gauchely yikes komodo dully more.</p>
                    <p>As abandoned winced this more far wow jeepers near more wow goodness so revealed much along worm some grasshopper.</p>
                    <br />
                    <small className="text-danger"><i> - Nasif Zeehan</i></small>
                </Col>
            </Row>
        </div>
    );
};

export default Welcome;