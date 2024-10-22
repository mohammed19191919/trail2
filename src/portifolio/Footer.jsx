import React from 'react';
import "./footer.css"
import Familyphoto from "../Component2/images/Family.jpg"
import Mahiruphoto from "../Component2/images/mahiru anbesa.jpg"
import Martiphoto from "../Component2/images/marti.jpg"
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

function Footer() {
  return (
   <section id="footer" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" style={{ height: '100vh', padding: '20px' }}>
    <div className='main-foot' >
        <div className='horizontal-line'></div>
         <div className="footer-container">
        <div className="adress-footer">
             <h2>Mohammed Chane</h2>
            <a href=" https://www.linkedin.com/in/mohammed-chane-asefa-416966233" target="_blank" rel="noopener noreferrer"> <FaLinkedin className='FaLinkedin'/>   </a>
            <a href="https://t.me/Mcafsm" target="_blank" rel="noopener noreferrer"><FaTelegram className='FaLinkedin'/></a>
            <a href="mailto:mohammedchane0119@gmail.com" target='_blank' rel='noopener noreferrer'><MdMarkEmailRead className='FaLinkedin'/></a>
        </div>
         <div className="footer-contact">
            <div className='family'>
            <h2>Family</h2>
            <p>Family</p>
            <img src={Familyphoto} alt="family" />
            </div>
             <div className='marti'>
                <h2>Marta Yimam</h2>
                <p>Wife</p>
                <img src={Martiphoto} alt="Marta yimam" />
             </div>
             <div className='mahir'>
                <h2>Mahir Mohammed</h2>
                <p>Son</p>
                <img src={Mahiruphoto} alt="Mahir mohammed" />
             </div>
            
         </div>
         </div>
         <div className='horizontal-line'></div>
           <div><p className="lastp"> &copy; {new Date().getFullYear()} All rights are reserved by law</p></div>
      </div>
      </section>
  )
}

export default Footer