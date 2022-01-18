import React, {useState, useEffect} from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import ModalMovie from "./components/ModalMovie";
import {getMovies} from "./api";
import StarfieldAnimation from 'react-starfield-animation';

export default function Result() {
    const [movies, setMovies] = useState([])
    
    const fetchMovies = async () =>{
      try {
        const data = await getMovies();
        setMovies(data.results)
      }catch(e){
      }
    }
      
      useEffect(()=>{
        fetchMovies();
      }, [])
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
            <Movies movies={movies}/>
          </div>
        </>
      )
    }
    