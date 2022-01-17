// Home.js
import React from 'react';
import img from './assets/images/cells2.png';
import { Link } from 'react-router-dom';
import ImageButton from 'react-image-button';
import imgButton from './assets/images/logo.svg';
import {MdAdd} from 'react-icons/md';
import btnimg from './assets/images/btnimg1.png';
import cell1 from './assets/images/new_cell1.png';
import cell2 from './assets/images/new_cell2.png';
import cell3 from './assets/images/new_cell3.png';
import cell4 from './assets/images/new_cell4.png';
import './App.css';
//import styled, { ThemeProvider } from "styled-components";

const Home = () => {
  return (
    <div className="Home1">
      <header className="Home1-header">
        <div class="row">
          <div class="column">
            <img src={cell1} className="Cell1" alt="logo1" />
          </div>
          <div class="column">
            <img src={cell2} className="Cell2" alt="logo2" />
          </div>
          <div class="column">
            <img src={cell3} className="Cell3" alt="logo3" />
          </div>
          <div class="column">
            <img src={cell4} className="Cell4" alt="logo4" />
          </div>
        </div>

        <ul>

          <Link to="/chat">
            <button class="chatbtn">
              <img src= {btnimg} width="280">
                {/* <MdAdd /> */}
              </img>
            </button>
          </Link>
      </ul>
      </header>
      
    </div>
  );
};


export default Home;