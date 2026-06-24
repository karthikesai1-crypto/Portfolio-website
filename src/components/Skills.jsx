import './Skills.css';
import {FaHtml5,FaCss3Alt,FaJs,FaReact,FaJava,FaGitAlt,FaGithub} from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import{ VscCode} from "react-icons/vsc";
function Skills(){
    return(
     
      <section id="Skills" className="skills-section">
      
  <div className="heading">
    <h2>Skills</h2>
    <p id='sub-name'>Technologies & Tools I Work With</p>
  </div>
  <div className="skills-container">
     <div className="skill-card1"data-aos="fade-right">
    <div className="skill-card">
      <h3>Frontend</h3>
      <div className="skill-tags">
        <div className='skill-item'> 
        <FaHtml5/>
        <span>HTML</span>
        </div>
         <div className='skill-item'> 
            <FaCss3Alt/> 
        <span>CSS</span> </div> 
         <div className='skill-item'>
            <FaJs/> 
        <span>JavaScript</span> </div>
         <div className='skill-item'> 
            <FaReact/>
        <span>React</span> </div>
      </div>
    </div> </div>
    <div className="skill-card1" data-aos="fade-left">
    <div className="skill-card">
      <h3>Backend</h3>
      <div className="skill-tags">
         <div className='skill-item'> 
            <FaJava/>
        <span>Java</span> </div> 
     </div>
    </div>
   </div>
    <div className="skill-card1"data-aos="fade-right">
    <div className="skill-card">
      <h3>Database</h3>
      <div className="skill-tags">
          <div className='skill-item'>  
            <SiPostgresql/>
        <span>PostgreSQL</span> </div>
      </div>
    </div>
</div>
    <div className="skill-card1" data-aos="fade-left">
    <div className="skill-card">
      <h3>Tools</h3>
      <div className="skill-tags">
        <div className='skill-item'>
            <FaGitAlt/>
        <span>Git</span>  </div>
        <div className='skill-item' >
            <FaGithub/>
        <span>GitHub</span> </div>
        <div className='skill-item'>
            <VscCode/>  
        <span>VS Code</span> </div>
      </div>
    </div>
    </div>
  </div>
 
</section>

    )
}
export default Skills;