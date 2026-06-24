import './Contact.css';
import { useState } from 'react';
import {FaEnvelope,FaGithub,FaLinkedin,FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';
function Contact(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    const[errors,setErrors]=useState({});
    const[successMessage,setSuccessMessage]=useState('');
    const sendEmail = () => {

        emailjs.send(
             "service_brk4q4d",
             "template_skt4zxf",
         {
             user_name: name,
             user_email: email,
             message: message
         },
             "tsnKhbWSnye-TgIfO" )
         .then(() => {
                 setSuccessMessage("Message Sent Successfully!"); })
         .catch((error) => {
                  console.log(error);
                 alert("Failed to send message");

  });

};

    const handleSubmit =(e) =>{
        e.preventDefault();
        let tempErrors ={};
        let hasError =false;
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if(name=== "" ||name.trim()===""){tempErrors.name="Name is Required"; hasError=true;}
        if(email ==="" || email.trim()==="") {tempErrors.email = "Email is Required"; hasError=true;}
         else if(!emailRegex.test(email)){tempErrors.email = "Enter a Valid Email Address"; hasError = true;}
        if(message ===""||message.trim()===""){tempErrors.message ="Message is Required";hasError=true;}
        setErrors(tempErrors);
       if(!hasError){

            sendEmail();

             setName('');
             setEmail('');
                 setMessage('');

}
    };
    return(
       <section id="Contact" className="contact-section">
 <div className="heading">
  <h2>Contact Me</h2>
  <p id='feature1'>Let's Work Together</p>

 </div>
 <div className="contact-container">
     <div className="hero-left1"data-aos="fade-right">
  <div className="contact-info">
   <div className="contact-card">
    <FaEnvelope className="contact-icon"/>

    <div>

     <h4>Email</h4>
     <p>karthikesai1@gmail.com</p>

    </div>

   </div>

   <div className="contact-card">
    <FaLinkedin className="contact-icon"/>

    <div>
     <h4>LinkedIn</h4>
     <p>www.linkedin.com/in/esai-karthick-g</p>
    </div>

   </div>

   <div className="contact-card">
    <FaGithub className="contact-icon"/>
    <div>
     <h4>GitHub</h4>
     <p>https://github.com/karthikesai1-crypto</p>
    </div>

   </div>
   <div className="contact-card">
    <FaMapMarkerAlt className="contact-icon"/>
    <div>
     <h4>Location</h4>
     <p> Tirunelveli , Tamil Nadu , India</p>

    </div>

   </div>
  </div>
  </div>
   <div className="hero-left1" data-aos="fade-left">
  <form onSubmit={handleSubmit}>
  <div className="contact-form">
   <input type="text" value={name} placeholder="Your Name"  onChange={(e) => setName(e.target.value)}/>
    {errors.name && <p className='error'>{errors.name}</p>}
   <input type="email" value={email} placeholder="Your Email"   onChange={(e) => setEmail(e.target.value)}/>
   {errors.email && <p className='error'>{errors.email}</p>}
   <textarea rows="6" value={message} placeholder="Your Message" onChange={(e) =>setMessage(e.target.value)}></textarea>
   {errors.message && ( <p className="error">{errors.message}</p>)}
   {successMessage && ( <p className="success">{successMessage}</p>)}
   <button> Send Message </button>
  </div>
    </form>
    </div>
 </div>
 <footer className="footer" data-aos="fade-up">


  <p>
    © 2026 .  Built  and  Designed by  Karthick .
  </p>

  <p>
      •  React • JavaScript • CSS
  </p>

</footer>


</section>
      
    )
}
export default Contact;