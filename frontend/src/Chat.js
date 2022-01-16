import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import ChatBot from 'react-simple-chatbot';
import InfoForm from './components/InfoForm';
import './index.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function Chat() {
  const [img, setImage] = useState({});
  const onChange = (e) => {
    setImage(e.target.files[0]);
  }
  const onClick = async () => {
    const formData = new FormData();
    formData.append('img_file', img);
    // 서버의 upload API 호출
    const res = await axios.post('http://192.249.18.213:80/face_classifier', formData);
    console.log(res);
  }
  const steps = [
    {
      id: '0',
      message: 'Welcome to react chatbot!',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Bye!',
      end: true,
    },
  ];
  return (
    <div>
      <InfoForm/>
    </div>
  );
}
export default Chat;
