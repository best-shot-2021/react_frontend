// Home.js
import React from 'react';
import img from './assets/images/home_img1.png';
import { Link } from 'react-router-dom';
import ImageButton from 'react-image-button';
import imgButton from './assets/images/logo.svg';
import {MdAdd} from 'react-icons/md';
import btnimg from './assets/images/btnimg1.png';
import './App.css';
//import styled, { ThemeProvider } from "styled-components";

const Home = () => {
  return (
    <div className="Home1">
      <header className="Home1-header">

        {/* <img src={img} className="Background" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>

          <Link to="/chat">
            <button class="chatbtn">
              <img src= {btnimg}>
              </img>
              {/* <MdAdd /> */}
            </button>
          </Link>
      </ul>
      </header>
      
    </div>
  );
};


export default Home;