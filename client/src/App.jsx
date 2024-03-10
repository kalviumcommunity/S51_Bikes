import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Firstinput from './Components/Firstinput';
import Post from './Components/Post'
import Update from './Components/Update'
import Login from './Components/Login';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Firstinput/>}></Route>
        <Route path='/postdata' element={<Post/>}></Route>
        <Route path='/updatedata/:Model' element={<Update/>}></Route>
        <Route path="/Login" element={<Login />}></Route>
      
      </Routes>
    </BrowserRouter>
  )
}


export default App;
