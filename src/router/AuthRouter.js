import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../components/NotFound/NotFound';
const AuthRouter = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default AuthRouter;