import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import './Home.css';


const Home = () => {


    return (
        <div className="home">
            <Slider></Slider>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;