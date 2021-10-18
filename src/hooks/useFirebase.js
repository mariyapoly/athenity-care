
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, FacebookAuthProvider } from "firebase/auth";
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
                setError('')
            }).catch((error) => {
                setError(error.message)
            });

    }
    // handle signin google
    const signInFacebook = () => {

        const facebookProvider = new FacebookAuthProvider();

        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                setUser(result.user);
                setError('')
            }).catch((error) => {
                setError(error.message)
            });

    }

    // observe user state changed

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });

    }, [])

    // handle logout user
    const logOut = () => {

        signOut(auth).then(() => {
            setUser({});
            setError('')
        }).catch((error) => {
            setError(error.message)
        });

    }





    return {
        signInUsignGoogle,
        signInFacebook,
        logOut,
        user,
        error
    }


}


export default useFirebase;
