import React from 'react'
import "./header.css";
import Images from "../Component2/images/20230531_161528.jpg";
function Header() {
  return (
     <section id="header" >
    <div >
       <div className="header-section" >
            <div className="image-logo">
               <img src={Images} alt="logo" />
               <h2>Mohammed Chane</h2>
            </div>
         <nav>
         <ul> 
        <li><a href=''>HOME</a></li>
        <li><a href=''>EXPERIENCES</a></li>
        <li><a href=''>EDUCATION</a></li>
        <li><a href=''>PUBLICATIONS</a></li>
        <li><a href=''>FOOTER</a></li>
      </ul>
         </nav>
           <button><a href="mailto:mohammedphar19@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a></button>
       </div>
        
    </div>
    </section>
  )
}

export default Header