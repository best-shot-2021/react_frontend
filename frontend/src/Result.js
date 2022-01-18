import React, {useState, useEffect} from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Result1 from "./components/Result1";
import ModalMovie from "./components/ModalMovie";
import {getMovies} from "./api";
import StarfieldAnimation from 'react-starfield-animation';
import './components/Result.css';




export default function Result() {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <StarfieldAnimation lineWidth = {2.0} numParticles = {130} alphaFactor = {0.35}
        style={{
          position: 'absolute',
          width: '100%',
          height: '350%',
        }}
      />
      <Navbar />
      <ModalMovie />
      

      <div className="Result">
        <Result1/>
      </div>
    </>
  )
}

