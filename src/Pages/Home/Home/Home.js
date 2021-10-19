import React from 'react';
import Clients from '../Clients/Clients';
import Services from '../Services/Services';
import Welcome from '../Welcome/Welcome';
import Banner from './../Banner/Banner';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Clients></Clients>
            <Welcome></Welcome>
        </div>
    );
};

export default Home;