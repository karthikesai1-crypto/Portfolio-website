import './About.css';
import abtImg from '../assets/profile-pic.png';
import { FaGraduationCap,FaCode,FaLaptopCode,FaRocket, FaLayerGroup,FaCrosshairs } from 'react-icons/fa';
function About(){
     
    return(
        <>  

        <section id="About" className='About-section'>
           <div  className='heading'>
             <h2 id='Aboutme'>About Me </h2>
            <p id='sub-title'> Get to Know Me Better</p>
             </div>
        <div className="hero-section1">
             <div className="hero-left1"data-aos="fade-right">
            <div className='hero-left1'> 
                 <div className='profile-wrapper'> 
                     <img src={abtImg} alt='image'/> </div> </div> 
                    </div>
             <div className="hero-right1" data-aos="fade-left">
            <div className='hero-right1'> 
                <div className='card1'>  <FaGraduationCap className='code'/> <p>  I'm  Computer Science Engineering <span className='importand'>Diploma Graduate (2026)</span> with a strong intrest in Full Stack Development </p> </div>
           
            <div className='card1'> 
                <FaCode className='code'/> <p> I enjoy building responsive and User-Friendly web Applications using <span className='importand'> Java , PostgresSQL , HTML , CSS , Rect.js and Java Script  </span> </p>
                 </div>
            <div className='card1'>
                 <FaCrosshairs className='code'/>  <p>Currently,I'm focused on improving my <span className='importand'> Backend Development Skills , Database design </span> knowledge and <span className='importand'>Modern Web  Application Architecture</span> </p> </div>
         </div>
        </div> </div>
        <div className="footer" data-aos="fade-up">
        <div className="about-cards">
         <div className="about-card">
           <FaGraduationCap className="card-icon" />

              <h3>Education</h3>

          <p>Diploma in Computer Science Engineering</p>

          <span>Passed Out: 2026</span>
          <p> CGPA : 9.59 / Precentage : 95.88</p>
         </div>
        <div className="about-card">
      <FaCode className="card-icon" />
      <h3>Core Skills</h3>
      <div className="skill-tags">
      <span>Frontend</span>
      <span>Backend</span>
      <span>Database Design</span>
      <span>Problem Solving</span>
     </div>
     </div>
      <div className="about-card">
        <FaRocket className="card-icon" />
        <h3>Career Goal</h3>
       <p>
      Become a Full Stack Developer and build scalable,
      real-world web applications and software solutions.
           </p>
              </div>
        </div>
        </div>
         </section>
         </>
    )
}
export default About;