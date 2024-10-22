import React, { useEffect, useState } from 'react'
import Header from './Header'
import { IoMdDocument } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FcContacts } from "react-icons/fc";
import Photo from "../Component2/images/20230531_161528.jpg";
import "./home.css"


let data=[
  'M', 'O', 'H', 'A', 'M','M', 'E','D'
]
function Home() {
  const [displayedName, setDisplayedName] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const totalLetters = data.length;

    const intervalId = setInterval(() => {
      if (index < totalLetters) {
        setDisplayedName(prev => prev + data[index]);
        setIndex(prev => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayedName(""); 
          setIndex(0); 
        }, 100); 
      }
    }, 100); 

    return () => clearInterval(intervalId); 
  }, [index]);
  return (
    <section id="home">
    <div >
      <div className="container">
        <div className="two">
        <div className="my-names"> 
             <p className='contactes2'>  <button className='contactes3'><FcContacts /></button> </p>
            <h1>Hi, I AM <span className='Mohammed'>
                    {displayedName}
              </span> </h1>
            <p>Lecturer of Pharmaceutics and Web Developer working for University of Gondar, Gondar</p>
            <p><IoMdDocument className='IoMdDocument'/> Lecturer of Pharmaceutics & Web Developer</p>
            <p><MdOutlineEmail className='IoMdDocument'/>  Mohammedchane0119@gmail.com     </p>
            <p>  <IoLocationSharp className='IoMdDocument'/> Gondar</p> 
           </div>
           <div className="download-my-cv">
              <p>Download my curriculum vitae:</p>
              <button>Download</button>
              <button><a href="mailto:mohammedphar19@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me</a></button>
            </div>
         
        </div>
         
          <div className="myimage">
             <img src={Photo} alt="Photo of mohammed Chane" />
          </div> 

          
      </div>
          

    </div>
    </section>
  )
}

export default Home