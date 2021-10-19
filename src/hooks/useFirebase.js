
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GithubAuthProvider } from "firebase/auth";
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

        return signInWithPopup(auth, googleProvider)


    }
    // handle signin facebook
    const signInFacebook = () => {

        const facebookProvider = new FacebookAuthProvider();

        return signInWithPopup(auth, facebookProvider)

    }

    // handle github sign in

    const signInUsignGithub = () => {
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider)

    }

    // signin email password
    const handleUserLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

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
        signInUsignGithub,
        handleCreateNewUser,
        handleUserLogIn,
        logOut,
        setUser,
        setError,
        user,
        error
    }


}


export default useFirebase;
