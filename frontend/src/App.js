import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import ChatBot from 'react-simple-chatbot';
import InfoForm from './components/InfoForm';
import './index.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Chat from './Chat';
import Result from './Result';
import {MdAdd} from 'react-icons/md';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/chat" element={<Chat/>}></Route>
        <Route exact path="/result" element={<Result/>}></Route>
      </Routes>

    </BrowserRouter> 
    </div> 
    
  );
}
export default App;
