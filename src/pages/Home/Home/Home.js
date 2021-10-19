import React from 'react';
import Doctors from '../../Doctors/Doctors';
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
            <Doctors></Doctors>
        </div>
    );
};

export default Home;