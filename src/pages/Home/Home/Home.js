import React from 'react';
import About from '../About/About';
import Slider from '../Slider/Slider';
import './Home.css'


const Home = () => {
    return (
        <div className="home">
            <Slider></Slider>
            <About></About>
        </div>
    );
};

export default Home;