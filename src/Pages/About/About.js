import React from 'react';
import { Form, Button, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="row cover1">
                <div className="col-md-6">

                </div>

                <div className="title1 col-md-6">
                    <h1 className="title1">
                        PET CARE
                    </h1>
                    <h3>We Are Their Voice</h3>
                    <p className="text-white text-center mt-3">
                        The American Society for the Prevention of Cruelty to Animals® (ASPCA®) was the first humane society to be established in North America and is, today, one of the largest in the world.
                    </p>
                    <p className="text-white text-center mt-3">
                        Our organization was founded on the belief that animals are entitled to kind and respectful treatment at the hands of humans and must be protected under the law. Headquartered in New York City, the ASPCA maintains a strong local presence, and with programs that extend our anti-cruelty mission across the country, we are recognized as a national animal welfare organization. We are a privately funded 501(c)(3) not-for-profit corporation, and are proud to boast more than 2 million supporters across the country.
                    </p>
                    <p className="text-white text-center mt-3">
                        The ASPCA’s mission, as stated by founder Henry Bergh in 1866, is “to provide effective means for the prevention of cruelty to animals throughout the United States.”
                    </p>
                    <p className="text-red text-end mt-3 me-3"> - Read More</p>
                </div>
            </div>


            <section class="subscribe py-5 my-5">
                <div class="container py-5">
                    <div class="row d-flex align-items-center py-5">
                        <div class="sub col-12 col-md-6 col-lg-6">
                            <div>
                                <h3>Subscribe Newsletter</h3>
                                <p>Get e-mail updates about our latest shop and special offers.</p>
                            </div>
                        </div>

                        <div class="form col-12 col-md-6 col-lg-6">
                            <div>
                                <Form>
                                    <Row controlId="formBasicEmail" className="align-items-center">
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Button variant="primary button-3 " type="submit">Subscribe</Button>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;