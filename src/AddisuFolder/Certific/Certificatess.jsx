import React from "react";
import "./certificates.css";
import Graduation from "../imagesada/graduation.jpg";
import Appricaition from "../imagesada/apprication.jpg";
import SesCertif from "../imagesada/photo_2024-10-20_15-34-13.jpg";
import newCertif from "../imagesada/photo_2024-10-20_15-34-31.jpg";
import Tartu1 from "../imagesada/tinistus1.jpg";
import Tartu2 from "../imagesada/tinustis2.jpg";
import Tartu3 from "../imagesada/tinutis3.jpg";
import Tartu4 from "../imagesada/tinutis4.jpg";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiOrcid } from "react-icons/si";


function Certificatess() {
 
  return (
    <section className="allcertificate">

      <div className="certificate">
        <img src={Tartu1} alt="certificate"/>
      </div>
      <div className="certificate">
        <img src={Tartu2} alt="certificate"/>
      </div>
      <div className="certificate">
        <img src={Graduation} alt="Certificate1" />
      </div>
      <div className="certificate">
        <img src={Appricaition} alt="Certificate1" />
      </div>
      <div className="certificate">
        <img src={newCertif} alt="Certificate1" />
      </div>
      <div className="certificate">
        <img src={SesCertif} alt="Certificate1" />
      </div>
      <div className="certificate">
         <img src={Tartu3} alt="addisu certificate" />
      </div>
      <div className="certificate">
         <img src={Tartu4} alt="addisu certificate" />
      </div>
      <div className="alllinks">
        <h2>Addisu Afrasa</h2>
         <div className="links">
            <FaLinkedin className="linkdinabout"/>
            <MdEmail className="linkdinabout"/>
            <SiOrcid className="linkdinabout"/>
        </div>
       </div>
    </section>
  );
}

export default Certificatess;