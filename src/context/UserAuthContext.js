import { createContext, useContext, useEffect, useState } from "react";
import {
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
        GoogleAuthProvider,
        signInWithPopup
}
    from 'firebase/auth'
import { auth } from "../firebase";


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

    const [user,setUser] = useState('');

    //signin and signout function

    function signUp(email,password)
    {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    function signIn(email,password)
    {
        return signInWithEmailAndPassword(auth,email,password);
    }
    function logOut()
    {
        return signOut(auth);
    }
    function signInWithGoogle()
    {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider);
    }

    useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth,(currentuser)=>
            {
                setUser(currentuser);
            });
            return () =>
            {
                unsubscribe();
            }
    },[]);

   return <userAuthContext.Provider value={{user, signUp, signIn, logOut, signInWithGoogle}}>{children}</userAuthContext.Provider>
}

export function useUserAuth() {
    return useContext(userAuthContext);
}