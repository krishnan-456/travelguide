import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext'

const ProtectedRoute = ({ children }) => {
    // let {user} = useUserAuth();
    // if (!user)
    // {
    //     return <Navigate to= '/'/>
    // }
    const getCookie = (cname) => {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
    }
    if (!getCookie('user')) {
        console.log("no user")
        return <Navigate to= '/signin'/>
    }
    else {
        return children;
    }
}

export default ProtectedRoute