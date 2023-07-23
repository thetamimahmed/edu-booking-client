import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut,  } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext()

const auth = getAuth(app)
const provider = new GoogleAuthProvider() 

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const resetUser = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe
        }
    },[])

    const authInfo = {
        user,
        loading,
        setLoading,
        googleSignIn,
        createUser,
        logInUser,
        logOutUser,
        resetUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;