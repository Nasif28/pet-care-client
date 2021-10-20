import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <section id="contact" className="container foot mt-5">
                <hr />
                <div className="row">
                    <div className="contact col-12 col-md-6 col-lg-4 py-5  text-start">
                        <p className="low">We have experienced and hard working team
                            and our prime goal is to provide best self service technicand necessary information to your pet to feel comfort. We treat your pet as our child.</p>
                        <div className="add low">
                            <p><i className="fab fa-facebook-square"></i> www.facebook.com/nasif28</p>
                            <p><i className="fas fa-envelope-square"></i> nasifzeehan1@gmail.com</p>
                            <p><i className="fas fa-map-marker-alt"></i> 70/K South Banasree, Dhaka-1219</p>
                            <p><i className="fas fa-phone-square"></i> +8801983794542</p>
                        </div>
                    </div>

                    <div className="f-2 col-12 col-md-6 col-lg-4 d-flex py-5">
                        <div className="info-1 col-6 col-md-6 col-lg-6">
                            <div className="d-flex justify-content-center pe-2">
                                <div>
                                    <h4 className="pb-3">Information</h4>
                                    <p> About Us</p>
                                    <p> Top Vats</p>
                                    <p> Our Clubs</p>
                                    <p> Instuments</p>
                                    <p> Secure Treatments</p>
                                </div>
                            </div>
                        </div>

                        <div className="info-2 col-6 col-md-6 col-lg-6">
                            <div className="d-flex justify-content-center pe-2">
                                <div>
                                    <h4 className="pb-3">My Account</h4>
                                    <p> My Account</p>
                                    <p> Discount</p>
                                    <p> Information</p>
                                    <p> My Address</p>
                                    <p> Vaccin</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="kick col-12 col-md-12 col-lg-4 ps-5">
                        <img src={'https://cdngeneral.rentcafe.com/dmslivecafe/UploadedImages/d54b143f-1542-4d3d-bba3-7e99eb10907d.jpg'} width="350" height="300" alt="" />
                    </div>
                </div>
            </section>


            <div className="rights">
                <p>Copyright &copy; 2021 Organive.All rights reserved Nasif Zeehan </p>
            </div>
        </div>
    );
};

export default Footer;