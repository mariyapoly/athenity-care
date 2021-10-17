import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Slider.css';
import sliderImg1 from '../../../images/slider/slider-img-1.jpg';
import sliderImg2 from '../../../images/slider/slider-img-2.jpg';
import sliderImg3 from '../../../images/slider/slider-img-3.jpg';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sliderImg1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1><span>The Best</span> Hospital and Doctors</h1>
                    <p>Need professional help? Our support staff will answer your questions. Visit us Now or Make an Appointment! </p>
                    <button className="regular-btn">make an Appointment</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sliderImg2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1><span>Best Treatment</span> and Happy Life</h1>
                    <p>Need professional help? Our support staff will answer your questions. Visit us Now or Make an Appointment! </p>
                    <button className="regular-btn">make an Appointment</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sliderImg3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1><span>Healthy Tablets</span> and Medicine</h1>
                    <p>Need professional help? Our support staff will answer your questions. Visit us Now or Make an Appointment! </p>
                    <button className="regular-btn">make an Appointment</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;