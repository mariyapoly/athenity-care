import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { allContext } = useAuth() || {};
    const { signInUsignGoogle, signInFacebook, logOut, user } = allContext || {};

    return (
        <div>
            <h1>this is login</h1>
            <h4>{user.displayName}</h4>
            <img src={user.photoURL} alt="" />
            <button onClick={signInUsignGoogle}>google sign in</button>
            <button onClick={signInFacebook}>facebook sign in</button>
            <button onClick={logOut}>Logout</button>
        </div>
    );
};

export default Login;