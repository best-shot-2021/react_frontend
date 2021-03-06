// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import btnimg from './assets/images/btnimg1.png';
import cell1 from './assets/images/new_cell1.png';
import cell2 from './assets/images/new_cell2.png';
import cell3 from './assets/images/new_cell3.png';
import cell4 from './assets/images/new_cell4.png';
import main_title from './assets/images/main_title.png';
import './App.css';
//import styled, { ThemeProvider } from "styled-components";

const Home = () => {
  return (
    
    <div className="Home1">
      <header className="Home1-header">
        <div style={{marginTop: '15px'}}>
        <img src={main_title} style={{width:'300px'}}></img>

        </div>
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

        <div>

          <Link to="/chat">
            <button class="chatbtn">
              <img src= {btnimg} width="200" alt="btn">
                {/* <MdAdd /> */}
              </img>
            </button>
          </Link>
      </div>
      </header>
      
    </div>
  );
};


export default Home;