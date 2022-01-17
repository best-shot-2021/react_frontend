import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import ChatBot from 'react-simple-chatbot';
import InfoForm from './components/InfoForm';
import './index.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ChatForm from './ChatForm';

function Chat() {
  return (
    <div>
      <ChatForm/>
    </div>
  );
}

export default Chat;
