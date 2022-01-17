import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Chat from './Chat';
import Result from './Result';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/chat" element={<Chat/>}></Route>
        <Route exact path="/result" element={<Result/>}></Route>
      </Routes>

    </BrowserRouter> 
    </div> 
    
  );
}
export default App;
