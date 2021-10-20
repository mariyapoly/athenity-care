import React from 'react';
import Doctors from '../../Doctors/Doctors';
import About from '../About/About';
import CounterUp from '../CounterUp/CounterUp';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import './Home.css';


const Home = () => {


    return (
        <div className="home">
            <Slider></Slider>
            <About></About>
            <Services></Services>
            <HomeAppointment></HomeAppointment>
            <Doctors></Doctors>
            <CounterUp></CounterUp>
        </div>
    );
};

export default Home;