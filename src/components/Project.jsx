import './Project.css';
import studentImg from '../assets/poroject-pic1.png';
import employeeImg from '../assets/project-pic2.png';
import taskImg from '../assets/project-pic3.png';
import portImg from '../assets/project-pic4.png';
import {FaCss3Alt,FaJs,FaReact,FaGithub,FaExternalLinkAlt, FaTrophy,FaHtml5,FaCode,FaRocket} from 'react-icons/fa';
function Project(){
    return(
        <>
        <section id='Project' className="Project1">
            <div className="heading">
                <h2>Projects</h2>
                <p id='feature'>Featured Work & Applications</p>
            </div>
            <div className="project-grid">
             <div className="project-wrapper"data-aos="fade-right">
        
        <div className="project-card" id='student'>
     <img src={studentImg} alt="Student Management" className="project-img"/>
        <div className="project-content">
          <h3>Student Management Portal</h3>
          <p>
            Student registration, validation and CRUD operations with a responsive dashboard interface.</p>
         <div className="tech-stack">
           <span> <FaReact  className='project-icon'/>  React</span>
           <span><FaJs  className='project-icon'/>  JavaScript</span>
           <span> <FaCss3Alt  className='project-icon'/>   CSS</span>
          </div>
          <div className="project-buttons">
           <a href="#" id='git-btn'> <FaGithub className='project-icon1'/>  GitHub</a>
           <a href="#">  Live Demo <FaExternalLinkAlt className='project-icon2'/> </a>
         </div>
         </div>
        </div>
       </div>
      
        <div className="project-wrapper" data-aos="fade-left">
            
        <div className='project-card' id='employee' >
            <img src={employeeImg} alt='Employee Management'  className='project-img'/>
            <div className='project-content'>
                <h3>Employee Directory Portal</h3>
                <p> Employee listing, search functionality and dynamic data rendering</p>
                <div className='tech-stack'>
                    <span> <FaReact className='project-icon'/> React  </span>
                    <span> <FaJs className='project-icon'/> JavaScript</span>
                    <span> <FaCss3Alt className='project-icon'/> CSS</span>
                </div>
                 <div className="project-buttons">
           <a href="#" id='git-btn'> <FaGithub className='project-icon1'/>  GitHub</a>
           <a href="#">  Live Demo <FaExternalLinkAlt className='project-icon2'/> </a>
         </div>
            </div>
        </div>
         </div>
       
          <div className="project-wrapper"data-aos="fade-right">
             
        <div className='project-card' id='task'>
            <img src={taskImg} alt='Task Management System' className='project-img'/>
            <div className='project-content'>
                <h3>Task Management System</h3>
                <p>Task creation, editing, deleting and local storage support</p>
                <div className='tech-stack'>
                    <span> <FaHtml5 className='project-icon'/> HTML</span>
                    <span> <FaCss3Alt className='project-icon'/> CSS</span>
                    <span> <FaJs className='project-icon'/> Java Script</span>
                </div>
                     <div className="project-buttons">
           <a href="#" id='git-btn'> <FaGithub className='project-icon1'/>  GitHub</a>
           <a href="#">  Live Demo <FaExternalLinkAlt className='project-icon2'/> </a>
         </div>
            </div>
        </div>
        </div>
       
        <div className="project-wrapper" data-aos="fade-left">
          
        <div className='project-card' id='port'>
            <img src={portImg} alt='Portfolio' className='project-img'/>
            <div className='project-content'>
                <h3>Portfolio Website</h3>
                <p> Modern glassmorphism portfolio built using React. </p>
            </div>
            <div className='tech-stack' id='crt'>
                <span> <FaReact className='project-icon'/> React</span>
                 <span> <FaCss3Alt className='project-icon'/> CSS</span>
                 <span> <FaJs className='project-icon'/> Java Script</span>
            </div>
            <div className="project-buttons">
           <a href="#" id='git-btn'> <FaGithub className='project-icon1'/>  GitHub</a>
           <a href="#">  Live Demo <FaExternalLinkAlt className='project-icon2'/> </a>
         </div>
        </div>
        </div>
        </div>
     </section>
     <div className="footer1" data-aos="fade-up">
     <div className='project-stats'>
        <div className='stat-box' id='fst-box'>
            <FaCode className='stat-icon'/>
            <h3>4+</h3>
            <p> Projects Completed</p>
        </div>
        <div className='stat-box' id='web'>
            <FaTrophy className='stat-icon'/>
            <h3>Full Stack</h3>
            <p> Web Applications</p>
        </div>
        <div className='stat-box' id='modern'>
            <FaRocket className='stat-icon'/>
            <h3> Modern</h3>
            <p>Technologies Used</p>
        </div>
     </div>
     </div>

 </>

    )
}
export default Project; 