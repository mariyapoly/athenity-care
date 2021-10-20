import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import SingleDoctor from '../SingleDoctor/SingleDoctor';

const SingleDoctors = () => {

    const { id } = useParams();

    const { allService } = useAuth() || {};
    const { doctores } = allService || {};

    const doc = doctores.find(dp => dp?.id === id);

    return (
        <div>
            <SingleDoctor doc={doc}></SingleDoctor>
        </div>
    );
};

export default SingleDoctors;