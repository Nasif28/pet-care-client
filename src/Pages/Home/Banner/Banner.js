import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel className="banner">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'https://cdn.pixabay.com/photo/2018/09/07/13/28/rabbit-3660673_960_720.jpg'}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Dick Dale, American Musician</h3>
                        <p>“There’s a saying. If you want someone to love you forever, buy a dog, feed it and keep it around.”</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'https://cdn.pixabay.com/photo/2019/08/19/07/45/dog-4415649_960_720.jpg'}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Josh Billings, American Comedian</h3>
                        <p>“A dog is the only thing on earth that loves you more than you love yourself.”</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'https://cdn.pixabay.com/photo/2021/09/17/10/55/caiman-lizard-6632344_960_720.jpg'}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Brendon Urie, American Musician</h3>
                        <p>“My favorite type of pet has always been a dog. They’re loyal, kind and offer endless affection.”</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg'}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>James Cromwell, American Actor</h3>
                        <p>“Pets are humanizing. They remind us we have an obligation and responsibility to preserve and nurture and care for all life.”</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_960_720.jpg'}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>George Eliot, British Author</h3>
                        <p>“Animals are such agreeable friends—they ask no questions; they pass no criticisms.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;