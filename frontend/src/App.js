// import React from 'react';
import './App.css';
import axios from 'axios';
import ChatBot from 'react-simple-chatbot';
import ChatForm from './components/ChatForm';
import './index.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Chat from './Chat';
import Result from './Result';
import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/result" element={<Result/>} />
      </Routes>
    </div>     
  );
}
export default App;