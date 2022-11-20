import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from "./nav/Home";
import Users from './nav/Users';
import About from './nav/About';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes> 
        <Route exact path="/" element= {<Home/>}/>
        <Route exact path="/Users" element= {<Users/>}/>
        <Route exact path="/About" element= {<About/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
