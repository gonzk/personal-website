import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import ContactMe from './components/pages/ContactMe';

function App() {
  return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path='/contact-me' element={<ContactMe/>}></Route>
          </Routes>
        </Router>
      </>
  );
}

export default App;
