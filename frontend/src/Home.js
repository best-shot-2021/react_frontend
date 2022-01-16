// Home.js
import React from 'react';
import img from './assets/images/home_img1.png';
//import styled, { ThemeProvider } from "styled-components";

const Home = () => {
  return (
    <div className="Home1">
      <header className="Home1-header">
        <img src={img} className="Background" alt="logo" />
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
      </header>
    </div>
  );
};


export default Home;