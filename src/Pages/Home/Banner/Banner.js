import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner3.jpg'
import banner2 from '../../../images/banner1.jpg'
import banner3 from '../../../images/banner2.jpg'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Travel With The Best</h3>
                        <p>Prepare for the unexpected with a Travel Guard travel insurance plan from Atlanta Express Travel. In these extraordinary times, protecting your trip</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>We Provide Best Tour Guide</h3>
                        <p>The best tour guides bring a destination to life with their passion, ... “We like to take visitors through the hutongs, historic lanes that.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>First Class Buses</h3>
                        <p>First Class Bus Tours and Travel Services. Small Enough TO CARE FOR YOU... Yet Big Enough TO SERVE YOU! </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;