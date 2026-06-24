import { useState,useEffect } from "react";
import {Link}from 'react-scroll';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase,FaEnvelope,FaLaptopCode } from "react-icons/fa";
import './Sidebar.css';
function Sidebar(){
 return (
    <div className="slidebar">
        <div className="slide-position">
      <h2 id="slide-name">KARTHICK</h2>
      <h5 id="position">Developer </h5>
     
      </div>
      <ul className="nav-links">
        <li>
            <Link to="Home" smooth={true} duration ={500} spy={true} activeClass="active" >
             <FaHome/>
             Home
             </Link>
             <Link to ="About" smooth={true} duration={500} spy={true} activeClass="active"> 
             <FaUser/>
             About
              </Link>
              <Link to="Skills" smooth={true} duration={500} spy={true} activeClass="active">
              <FaLaptopCode/>
              Skills
              </Link>
              <Link to="Project" smooth={true} duration={500} spy={true} activeClass="active">
              <FaProjectDiagram/>
              Project
              </Link>
              <Link to="Contact" smooth={ true} duration={500} spy={true} activeClass="active"> 
              <FaEnvelope/>
              Contact
              </Link>

        </li>
      </ul>
        <button className="cv-btn"> <a href="/public/karthik.pdf" download>  Download CV </a>  </button>

    </div>
 )

}
export default Sidebar;