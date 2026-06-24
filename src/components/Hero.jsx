import './Hero.css';
import heroImg from '../assets/profile-pic.png';
import bgImg from '../assets/bgimg.png';
import {Link}from 'react-scroll';
function Hero(){
    return(
        <> 
        
        <section id="Home" className='hero'>
            <div className="hero-left1"data-aos="fade-right">
        <div className="hero-left">
           <div className='welcome'> 
           <h5> Hello, I'm  </h5>
           <h4> Esai Karthick </h4>
           <h5>Full Stack Developer</h5>
            </div>
        <div className='border'></div>
        <p className='description'> I build scalable web Application using Java, PostgresSQl , React and  modern technologies...</p>
        <div className='hero-buttons'> 
            <Link  to="Project" smooth={true} duration={500} spy={true} activeClass="active"> 
            <button className='Main-btn'>View My Work →</button> 
            </Link>
            <Link  to="Contact" smooth={true} duration={500} spy={true} activeClass="active">
            <button className='second-btn'> Get In Touch ✈ </button>
             </Link>
        </div>
            
        <div className='technology'>
            <p id='tech'>  Technology</p>
            <span>Java</span>
            <span>PostgreSQL</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>Git</span>
        </div>
         </div>
         </div>
         <div className="hero-right1" data-aos="fade-left">
         <div className='hero-right'>
            <div className='glass-card'>
                <div className="glass-reflection"></div>
                 <div className='profile-wrapper'> 
                 <img src={heroImg} alt='Profile'/> </div>
                 <div className='badge'> Full Stack Developer</div>
                 <div className='start'>
                 <div> <h3>3+</h3> <p> Projects</p></div>
                 <div> <h3>5+ </h3> <p> Technologies</p> </div>
                 <div> <h3>1+ </h3> <p> learning </p></div>
                 </div>
                 <div className='learning-card'> ⚡ 
                    Currently Learning 

                    Advance System Design and Cloud Technologies
                 </div>
                 <div className="card-glow"></div>
                  </div>
            </div>
         
        
           </div>
        </section>
         </>
    );
}
export default Hero;