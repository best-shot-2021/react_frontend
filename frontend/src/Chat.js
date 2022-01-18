import React from 'react';
import './App.css';
import './index.css';
import ChatForm from './components/ChatForm';

function Chat() {
  return (
    <div class="chat_layer">
      <div class="chat_layer_inner">
        <ChatForm/>
      </div>
    </div>
  );
}

export default Chat;
