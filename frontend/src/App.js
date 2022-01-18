import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import ChatBot from 'react-simple-chatbot';
import ChatForm from './components/ChatForm';
import './index.css';


function App() {
  
  return (
    <div class="chat_layer">
      <div class="chat_layer_inner">
        <ChatForm />
      </div>
    </div>
  );
}
export default App;
