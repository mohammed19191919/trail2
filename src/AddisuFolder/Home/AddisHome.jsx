import React from "react";
import "./AddisHome.css";
import Myimage from "../../Component2/images/adahome.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import {Link} from "react-router-dom";
import { FaOrcid } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";


function AddisHome(){

    return(
        <section className="home-section">
          <div className="next-home-head">
            <p>MSc Student in pharmaceutical Quality Surance and <br />Regulatory Affairs at Jimma University</p> 
             <h3>Department of Pharmaceutical Chemistry, <br />School of Pharmacy, University of Gondar</h3>
          </div>
             <div className="start-about">
                <img src={Myimage} alt="Addisu Afrasa" className="myimage" />
                 <div className="Start-about-all">
                       <h1>Addisu Afrassa </h1>
                       <h2>MSc Student</h2>
                       <p> I attained my bachelor's degree in Pharmacy from the University of Gondar in Ethiopia. Subsequently, I served as an assistant lecturer in the Pharmaceutical Chemistry Department at the same university. Currently, I am a Master of Science Candidate in Pharmaceutical Quality
                         Assurance and Regulatory Affairs at Jimma University, Ethiopia, from October 2022 to January 2025.</p>
                         <button className="readmore" > < Link to='/about'> Read More </Link></button>
                 </div>
             </div>
             <div className="empity">
               
             </div>
             <div className="links">
             <div classname="tele-link">
            <h2>Addisu Afrasa Tegegne</h2>
             <a href="www.linkedin.com/in/addisu-afrassa" target="_blank" rel="noopener noreferrer"><FaLinkedin className="linkidin1"/> </a>
              <a href="https://orcid.org/0000-0002-3855-7213" target="_blank" rel="noopener noreferrer"> < FaOrcid className="telegram1" /> </a>
              <a href="mailto:addisuafrasa4648@gmail.com" target="_blank" rel="noopener noreferrer"> < MdOutlineEmail className="telegram1" /> </a>
              </div>
              <div className ="footerofall">
              <p>&copy; {new Date().getFullYear()} All right reserved by low</p> 
            </div>
             </div>
        </section>
    )
}
export default AddisHome