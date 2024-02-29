import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Firstinput from './Components/Firstinput';
import Post from './Components/Post'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Firstinput/>}></Route>
        <Route path='/postdata' element={<Post/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
