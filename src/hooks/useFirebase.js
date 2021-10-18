
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    // declear state
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();

    // handle signin google
    const signInUsignGoogle = () => {

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setError('');
            }).catch((error) => {
                setError(error.message);
            });

    }
    // handle signin facebook
    const signInFacebook = () => {

        const facebookProvider = new FacebookAuthProvider();

        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                setUser(result.user);
                setError('');
            }).catch((error) => {
                setError(error.message);
            });
    }

    // signin email password
    const handleUserLogIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // create new user email password
    const handleCreateNewUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setError('');
                setUserName(name);
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    // set user Nmae
    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    // observe user state changed
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });

    }, [])

    // handle logout user
    const logOut = () => {

        signOut(auth).then(() => {
            setUser({});
            setError('');
        }).catch((error) => {
            setError(error.message);
        });

    }


    return {
        signInUsignGoogle,
        signInFacebook,
        handleCreateNewUser,
        handleUserLogIn,
        logOut,
        user,
        error
    }


}


export default useFirebase;
