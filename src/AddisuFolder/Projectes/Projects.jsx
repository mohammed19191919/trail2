import React from 'react';
import "./projects.css"
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiOrcid } from "react-icons/si";


function Projects() {
  return (
    <div style={{textAlign:"center", paddingTop: 100, height: 300 }}>
    <hr  className="horizontal-line"/> 
        <h2> This page will update shortly </h2>

       <div className="alllinks">
        <h2>Addisu Afrasa</h2>
        <div className="links">
            <a href="https://linkdin.com/in/addisu-afrassa " target="_blank" rel='noopener noreferre'> <FaLinkedin className="linkdinabout"/> </a>
            <a href="mailto:addisuafrassa4648@gmail.com " target="_blank" rel='noopener noreferre'> <MdEmail className="linkdinabout"/> </a>
            <a href="https://orcid.org/0000-0002-3855-7213 " target="_blank" rel='noopener noreferre'> <SiOrcid className="linkdinabout"/>  </a>
        </div>
         <p> &copy; {new Date().getFullYear} All right reserved by low. </p>
       </div>

    </div>
  )
}

export default Projects