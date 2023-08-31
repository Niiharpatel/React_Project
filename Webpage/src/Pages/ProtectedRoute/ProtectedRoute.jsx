import React, { useEffect } from 'react';
import { userAuth } from '../Auth/Auth';
import { useNavigate } from 'react-router';

export default function ProtectedRoute({ component }) {
    let { user } = userAuth();
    let navigate = useNavigate();



    useEffect(() => {
        if (!user) {
            navigate('/LoginForm');

            // alert("Please Login to access the Website!! Thank You.");
        }

    }, []);
    return (
        <>
                {component}

        </>
    );
}
