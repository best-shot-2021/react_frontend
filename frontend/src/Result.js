// About.js
import React from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import Home from './Home';
import './App.css';

const Result = () => {
  return (
    <div className="bg">
    <header>
    <div className="btn">
      <svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path
          fill="none"
          d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
        />
        <path
          fill="none"
          d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
        />
      </svg>
    </div>
    <motion.div className="title"
      initial={{ y: -250}}
      animate={{ y: -10 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
    >
      <h1>분석결과표</h1>
    </motion.div>
  </header>
  </div>
  );
};

export default Result;