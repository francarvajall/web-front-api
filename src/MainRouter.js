import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from "./core/Home";
import Menu from "./core/Menu";
import Signup from './user/Signup';
import Signin from './user/Signin';


const MainRouter = () => (
    <div>

    <Menu />

    <Routes>
        <Route excat path="/" element={<Home/>} />
        <Route excat path="/signup" element={<Signup/>} />
        <Route excat path="/signin" element={<Signin/>} />
        
    </Routes>

    </div> 
   
);

export default MainRouter;
