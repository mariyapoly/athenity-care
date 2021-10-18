import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useServices from '../hooks/useServices';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const allContext = useFirebase();
    const allService = useServices();

    return (
        <AuthContext.Provider value={{ allContext, allService }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;