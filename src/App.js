import './App.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import Profile from './components/Profile';
import Navbar from './components/Nabva';
import Cursor from './components/Cursor';
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <Profile/>
      <Cursor/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
