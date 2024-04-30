import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Shared/Loader';

const PrivateRouter = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading) return <Loader/>
    if(user) return children
    return    <Navigate to="/login" state={{from: location}} replace />

};

export default PrivateRouter;