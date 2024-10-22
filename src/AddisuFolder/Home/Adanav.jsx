import React from "react";
import './AddisHome.css';
import {Link} from "react-router-dom"

function Adanav(){
    return(
        <nav>
             <p className="pppp"> If you want such types of remarkable website please contact us <a href="https://t.me/Mcafsm" target="_blank" rel="noopener noreferrer"><button>Contact </button> </a></p>
        <hr className="horizontalline"/>
         <div className="name-head">
         <div className="addisu_logo">
           <h2>Addisu Afrassa Tegegne, Bpharm</h2>
           </div>
             <Link to="/" className="apphome"> Home </Link>
            <ul className="Unorderd-lists">
                <li></li>
                <li><Link to="/about" className="appabout"> About </Link> </li>
                <li><Link to="/projects" className="appabout"> Projects </Link> </li>
                <li><Link to="/publications" className="appabout"> Publications </Link> </li>
                <li><Link to="/certificatess" className="appabout"> Certificatess </Link> </li>
            </ul>
         </div>
         <hr  className="horizontal-line"/> 
        </nav>
    )
}
export default Adanav