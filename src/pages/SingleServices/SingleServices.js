import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import SingleService from '../SingleService/SingleService';
import './SingleServices.css'

const SingleServices = () => {

    const { id } = useParams();

    const { allService } = useAuth() || {};
    const { services } = allService || {};

    const depeartment = services.find(dp => dp?.id === id);

    return (
        <div>
            <SingleService depeartment={depeartment}></SingleService>
        </div>
    );
};

export default SingleServices;