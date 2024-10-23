import React from "react";
import "./AddisHome.css";
import {Link} from "react-router-dom"

function Adnav(){
    return(
     <section>
         <div className="pheading">
            <p>If any one wants any kinds of website please contact us <button><a href="https://t.me/mcafsm">Contact</a></button></p>
         </div>
       <hr className="horizontalline"/>
        <div className="name-head">
        <div className="addisu_logo">
          <h2>Addisu Afrassa Tegegne, Bpharm</h2>
          </div>
          <Link to="/" className="homeproperty">Home</Link>
           <ul className="Unorderd-lists">
               <li><Link to="/about" className="property">About</Link></li>
               <li><Link to="/projects" className="property">Projects</Link></li>
               <li><Link to="publications" className="property">Publications</Link></li>
               <li><Link to="certificatess" className="property">Certificatess</Link></li>
           </ul>
        </div>
     </section>
    )      
}
export default Adnav