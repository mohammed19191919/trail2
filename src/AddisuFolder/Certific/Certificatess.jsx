import React from "react";
import "./certificates.css";
import Graduation from "../imagesada/graduation.jpg";
import Appricaition from "../imagesada/apprication.jpg";
import SesCertif from "../imagesada/photo_2024-10-20_15-34-13.jpg";
import newCertif from "../imagesada/photo_2024-10-20_15-34-31.jpg";
import NewT1 from "../imagesada/tinistus1.jpg";
import NewT2 from "../imagesada/tinustis2.jpg";
import NewT3 from "../imagesada/tinutis3.jpg";
import NewT4 from "../imagesada/tinutis4.jpg";
import { FaOrcid } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

function Certificatess() {


  return (
    <section className="allcertificate"> 
   
      <div className="certificate1">
      <div className="subcertificate">
      <img src={NewT1} alt="Certificate1" />
      <img src={NewT2} alt="Certificate1" />

      </div>
      <p>Certificates of completion </p>
      
      </div>
        
      <div className="certificate2">
        <img src={Graduation} alt="Certificate1" />
        <p>Certificates of completions</p>
      </div>
      <div className="certificate2">
        <img src={Appricaition} alt="Certificate1" />
        <p>Certificate of appricaition</p>
      </div>
      <div className="certificate2">
        <img src={newCertif} alt="Certificate1" />
        <p>Certificate of participation</p>
      </div>
      <div className="certificate2">
        <img src={SesCertif} alt="Certificate1" />
        <p>Certificate of acheivement</p>
      </div>
      <div className="certificate1">
      <div className="subcertificate">
      <img src={NewT3} alt="Certificate1" />
      <img src={NewT4} alt="Certificate1" />
      </div>
      <p> Certificates of LC-MS method Validation
      </p>
      </div>
      <div className="links">
        <div classname="tele-link">
            <h2>Addisu Afrasa Tegegne</h2>
             <a href="www.linkedin.com/in/addisu-afrassa" target="_blank" rel="noopener noreferrer"><FaLinkedin className="linkidin1"/> </a>
              <a href="https://orcid.org/0000-0002-3855-7213" target="_blank" rel="noopener noreferrer"> < FaOrcid className="telegram1" /> </a>
              <a href="mailto:addisuafrasa4648@gmail.com" target="_blank" rel="noopener noreferrer"> < MdOutlineEmail className="telegram1" /> </a>
              </div>
              <div className ="footerofall">
              <p>&copy; {new Date().getFullYear()}  All right reserved by low</p> 
            </div>
             </div>
    </section>
  );
}

export default Certificatess;