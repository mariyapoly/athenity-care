
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    // declear state
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // handle signin google
    const signInUsignGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)


    }
    // handle signin facebook
    const signInFacebook = () => {
        setIsLoading(true)
        const facebookProvider = new FacebookAuthProvider();
        return signInWithPopup(auth, facebookProvider)

    }

    // handle github sign in

    const signInUsignGithub = () => {
        setIsLoading(true)
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider)

    }

    // signin email password
    const handleUserLogIn = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    // create new user email password
    const handleCreateNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // set user Nmae
    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    // observe user state changed
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError('');
            }
            setIsLoading(false)
        });

        return () => unsubscribed;

    }, [])

    // handle logout user
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({});
            setError('');
        }).catch((error) => {
            setError(error.message);
        }).finally(() => setIsLoading(false))

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
        isLoading,
        setIsLoading,
        user,
        setUserName,
        error
    }


}


export default useFirebase;
