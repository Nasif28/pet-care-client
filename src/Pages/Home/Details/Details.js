import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const Details = (props) => {
    const { service } = useParams();
    const [servicesDetails, setServicesDetails] = useState([]);
    const [singleService, setSingleService] = useState({});

    useEffect(() => {
        fetch('/ServicesDetails.json')
            .then(res => res.json())
            .then(data => setServicesDetails(data.ser));
    }, [])
    // console.log(servicesDetails);

    useEffect(() => {
        const foundService = servicesDetails.find(
            (ser) => ser.id === service
        );
        // console.log(foundService);
        setSingleService(foundService);
    }, [servicesDetails]);


    // console.log(singleService);
    return (
        <div id="details" className="container">
            <h1 className="fw-bold text-success my-5">Details of {singleService?.title}</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <img className="img-fluid" src={singleService?.img} alt="" />
                </div>
                <div className="col align-middle">
                    <h2 className="fw-bold text-success">{singleService?.title}</h2>
                    <p></p>
                    <small>{singleService?.shortDescription}</small>

                    <h6 className="text-start mt-5">About: {singleService?.shortTitle}</h6>
                    <h6 className="text-start">Duration: {singleService?.duration}</h6>
                    <h6 className="text-start">Up to: ${singleService?.price}</h6>
                </div>
            </div>
            <h2 className="mt-5 fw-bold text-success">Description of {singleService?.title} </h2>
            <p>{singleService?.description}</p>
            <Button href="/home#services" className="btn fw-bolder btn-success px-5 mt-3">Back</Button>
        </div >
    );
};

export default Details;