import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Service.css'
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { service, title, shortTitle, duration, shortDescription, description, price, img } = props.service;

    return (
        <Col>
            <Card className="text-start h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-success fw-bolder">{title}</Card.Title>
                    <Card.Text>
                        <small>{shortTitle}</small>
                        <p></p>
                        <h6>Duration: {duration}</h6>
                        <h6>Up to: ${price}</h6>
                        <p></p>
                        <p>{shortDescription}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/details/${service}`}>
                        <Button variant="success" className="w-100">Details</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;