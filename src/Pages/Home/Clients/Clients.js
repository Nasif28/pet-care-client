import React from 'react';
import { Card } from 'react-bootstrap';

const Clients = () => {
    return (
        <div id="clients" className="clients container my-5">
            <hr />
            <h2 className="my-5 text-success fw-bold ">Our Happy Clients</h2>
            <div className="row mx-auto my-3">
                <div className="col-lg-3">
                    <Card className="text-start h-100">
                        <Card.Img variant="top" src={'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg'} />
                        <Card.Body>
                            <Card.Title className="text-success fw-bolder">Tobby</Card.Title>
                            <Card.Text>
                                <p></p>
                                <h6>Leg Surgery</h6>
                                <h6>Admitted 2 Month</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card className="text-start h-100">
                        <Card.Img variant="top" src={'https://www.cdc.gov/healthypets/images/pets/training-a-puppy.jpg'} />
                        <Card.Body>
                            <Card.Title className="text-success fw-bolder">Chew</Card.Title>
                            <Card.Text>
                                <p></p>
                                <h6>Back Bone Broked</h6>
                                <h6>Admitted 3 Month</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card className="text-start h-100">
                        <Card.Img variant="top" src={'https://www.cdc.gov/healthypets/images/pets/boy-playing-with-dog.jpg'} />
                        <Card.Body>
                            <Card.Title className="text-success fw-bolder">Mini</Card.Title>
                            <Card.Text>
                                <p></p>
                                <h6>Stomach Infection</h6>
                                <h6>Admitted 4 Month</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card className="text-start h-100">
                        <Card.Img variant="top" src={'https://www.cdc.gov/healthypets/images/pets/woman-with-cat-medium.jpg?'} />
                        <Card.Body>
                            <Card.Title className="text-success fw-bolder">Piu</Card.Title>
                            <Card.Text>
                                <p></p>
                                <h6>Pragnency</h6>
                                <h6>Admitted 1 Month</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="row mx-auto">
                <div className="col-lg-3">
                    <Card className="text-start h-100">
                        <Card.Img variant="top" src={'https://www.cdc.gov/healthypets/images/pets/woman-with-cat-asleep-medium.jpg'} />
                        <Card.Body>
                            <Card.Title className="text-success fw-bolder">Candy</Card.Title>
                            <Card.Text>
                                <p></p>
                                <h6>Vision</h6>
                                <h6>Admitted 1.5 Month</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card className="text-start h-100">
                        <Card.Img variant="top" src={'https://www.cdc.gov/healthypets/images/pets/man-holding-cat-medium.jpg'} />
                        <Card.Body>
                            <Card.Title className="text-success fw-bolder">Tiger</Card.Title>
                            <Card.Text>
                                <p></p>
                                <h6>Fever</h6>
                                <h6>Admitted 2 Month</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card className="text-start h-100">
                        <Card.Img variant="top" src={'https://www.cdc.gov/healthypets/images/horse-and-vet.jpg'} />
                        <Card.Body>
                            <Card.Title className="text-success fw-bolder">Eko</Card.Title>
                            <Card.Text>
                                <p></p>
                                <h6>Heart Surgery</h6>
                                <h6>Admitted 5 Month</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3">
                    <Card className="text-start h-100">
                        <Card.Img variant="top" src={'https://www.cdc.gov/healthypets/images/pets/man-running-with-dog.jpg'} />
                        <Card.Body>
                            <Card.Title className="text-success fw-bolder">Minu</Card.Title>
                            <Card.Text>
                                <p></p>
                                <h6>Food Poison</h6>
                                <h6>Admitted 7 Month</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div >
    );
};

export default Clients;