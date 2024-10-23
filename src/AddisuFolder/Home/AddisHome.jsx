import React from "react";
import "./AddisHome.css";
import {Link} from "react-router-dom";
import Myimage from "../imagesada/adahome.jpg";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiOrcid } from "react-icons/si";


function AddisHome(){

    return(
        <section className="home-section">
       
        <hr  className="horizontal-line"/> 
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
                         <button className="readmore"> <Link to ="/about" className="readmorlink">Read More</Link></button>
                 </div>
             </div>
             <div className="empity">
               
             </div>
             <div className="alllinks">
        <h2>Addisu Afrasa</h2>
         <div className="links">
            <FaLinkedin className="linkdinabout"/>
            <MdEmail className="linkdinabout"/>
            <SiOrcid className="linkdinabout"/>
        </div>
        <p> &copy; {new Date().getFullYear()} All right reserved by low. </p>
       </div>
        </section>
    )
}
export default AddisHome