import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';




const AuthContext = createContext(null);

export default function Auth({ children }) {

    const navigate = useNavigate();


    let [user, setUser] = useState(null);
    let [searchText, setSearchText] = useState('');


    function login(userData) {
        localStorage.setItem("loginUser", JSON.stringify(userData));
        navigate('/');
    }

    function logout() {
        localStorage.removeItem("loginUser");
        navigate('/');
    }

    useEffect(() => {
        let data = localStorage.getItem("loginUser");
        if (data) {

            setUser(JSON.parse(data));
        }

    }, []);

    return (

        <>
            <AuthContext.Provider value={{ login, logout, user, searchText, setSearchText }}>

                {children}

            </AuthContext.Provider>

        </>
    );
}

export const userAuth = () => {
    return useContext(AuthContext);
};
