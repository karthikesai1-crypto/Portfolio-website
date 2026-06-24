import './app1.css';
import { useState } from 'react'
import Sidebar from './components/Sidebar';
import Home from './components/Hero';
import Contact from './components/Contact';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import bgImg from './assets/bgimg.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
    useEffect(() => { AOS.init({ duration: 1000, once: true, });}, []);
  return (
    <>
    <div className='App-container'> 
      <Sidebar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
       <Contact/>
      </div>
    </>
  )
}

export default App
