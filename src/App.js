import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register"
import React from 'react'
import QuestionState from "./QuestionContext/QuestionState";
// import React, { Component } from 'react';
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
  
    <div>
        <QuestionState>
       <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={<Register/>}  />
                <Route path="/login" element={<Login/>} />
                <Route path="/profile/:id" element={<Profile/>} />

            </Routes>
          
            </QuestionState>
    </div>
  )
}

export default App