import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { Weapons } from './components/weapons/Weapons'
import { Units } from './components/unit/Unit';
import { AddUnit } from './components/unit/addUnit/AddUnit';
import { ErrorPage } from './components/ErrorPage';
//components 


export const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/units" element={<Units />} /> 
        <Route path="/units/add" element={<AddUnit />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>  
    </Router>
  );
}

export default App;
