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
                        <h3 className='text-primary'>POWER TOOLS & ACCESSORIES</h3>
                        <p className='text-primary'>Beginners, hobbyists, and contractors alike—welcome! Looking for the power tools to bring your woodworking creative vision to life? You've come to the right place! </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-primary'>Project Kits, Models, Crafts for the Whole Family</h3>
                        <p className='text-primary'>Great to give as kits, or as finished gifts, Woodcraft offers a huge selection of project kits, from WoodRiver® pen kits to Ugears and Robotime models, </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-primary'>WOODWORKING CLASSES NEAR ME</h3>
                        <p className='text-primary'>Woodworking classes at Woodcraft are a great place to learn the basics of woodworking or expand your skills and learn new techniques in an area of woodworking that interests you. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;