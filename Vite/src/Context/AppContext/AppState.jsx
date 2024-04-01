import React, { useEffect, useState } from 'react'
import AppContext from './AppContext';
import { jwtDecode } from 'jwt-decode';

const AppStates = (props) => {

    const [userName, setUserName] = useState(null);
    const [userToken, setToken] = useState(null);

    useEffect(()=>{

        const sessionToken = sessionStorage.getItem("token");
        const sessionEmail = sessionStorage.getItem("email");

        if(userName === null) setUserName(sessionEmail);
        if(userToken === null) setToken(sessionToken);
    },[])

    const uploadToken = (token) =>{
        let decodedToken = jwtDecode(token);
        setToken(token);
        setUserName(decodedToken?.userEmail);
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("email", decodedToken?.userEmail);
    }

    const getToken = () => userToken;

    const getAuthStat = () => jwtDecode(userToken).userRole;

  return (
    <AppContext.Provider value={{uploadToken, getToken, getAuthStat, userName}} >
        { props.children }
    </AppContext.Provider>
  )
}

export default AppStates