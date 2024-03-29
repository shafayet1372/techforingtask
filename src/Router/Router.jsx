import React, { useState, useEffect } from 'react'
import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register'
import PrivateRoute from './PrivateRoute';
import CreateJob from '../pages/CreateJob';
import isLoggedIn from '../js/AuthenticationCheck';



export default function Router() {


    return <HashRouter>
        <Routes>
            <Route path="/techforingtask" element={isLoggedIn() ? <Home /> : <Login />} />
            <Route path="/techforingtask/register" element={<Register />} />
            <Route element={<PrivateRoute />}>
                <Route path="/techforingtask/home" element={<Home />} />
                <Route path="/techforingtask/add-job" element={<CreateJob />} />
            </Route>

        </Routes>
    </HashRouter>
}
