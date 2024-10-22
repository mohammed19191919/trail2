import React from 'react';
import "./mycontact.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaOrcid } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function Mycontacts(){

    return(
        <section className="mycontactes-cont"> 
            <hr />  
          <div classname="tele-link">
            <h2>Addisu Afrasa Tegegne</h2>
          <a href="www.linkedin.com/in/addisu-afrassa" target="_blank" rel="noopener noreferrer"><FaLinkedin className="linkidin1"/> </a>
          <a href="https://orcid.org/0000-0002-3855-7213" target="_blank" rel="noopener noreferrer"> < FaOrcid className="telegram1" /> </a>
          <a href="mailto:addisuafrasa4648@gmail.com" target="_blank" rel="noopener noreferrer"> < MdOutlineEmail className="telegram1" /> </a>
          </div>
          <div className ="footerofall">
              <p>&copy; {new Date().getFullYear()} All right reserved by low</p> 
            </div>
        </section>
    )
}
export default Mycontacts