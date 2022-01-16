import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import ChatBot from 'react-simple-chatbot';
import InfoForm from './components/InfoForm';
import './index.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
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
    /*<div className="App">
      <input type='file'
        accept='image/*'  
        onChange={onChange}>
      </input>
      <button onClick={onClick}>제출</button>
    </div>*/
    <div className="App">
      

    <BrowserRouter>
    <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">어바웃</Link>
        </li>
      </ul>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
        </Routes>
    </BrowserRouter> 
    </div> 
    
    // <div>
    //   <ChatBot steps={steps} />
    //   <InfoForm/>
    // </div>
  );
}
export default App;
