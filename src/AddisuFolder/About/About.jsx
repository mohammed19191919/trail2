import React from 'react';
import "./about.css";
import Imageme from "../../Component2/images/adahome.jpg";
import { FaDotCircle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaOrcid } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function About() {
  return (
    <section className='about-conntainer'>
       <div className="aboutme-cont">
       <h1 className='aboutme'>About Me</h1>
       </div>
        <div className="para-ima">
        <div className="paragraphs">
            <p className="paragraph1">
            I attained my bachelor's degree in Pharmacy from the University of Gondar in Ethiopia. Subsequently, 
            I served as an assistant lecturer in the Pharmaceutical Chemistry Department at the same university.
            Currently, I am a Master of Science Candidate in Pharmaceutical Quality Assurance and Regulatory Affairs at Jimma University,
             Ethiopia, from October 2022 to January 2025. 
            </p>
            <p className="paragraph1">
            My thesis focuses on assessing the current quality infrastructure in Ethiopia's pharmaceutical manufacturing sector and suggesting strategic enhancements.  In addition, I have been engaged in research related to the pharmaceutical landscape, which includes co-authoring a paper on drug synthesis, medicinal plant extraction, 
            and Quality by Design principles as potential solutions to challenges in pharmaceutical manufacturing.
            </p>
            <p className="paragraph1">
            As my MSc program is near finalizing, I am going to embark on the next chapter of my academic career. With my academic background, research experience, and passion for innovation, I am captivated to join a graduate program in the interface of Drug Discovery, Quality by Design Principles, 
            and Pharmaceutical Policy and Regulation.
            </p>
           
        </div>
         <div className='imag-cont'>
           <img src={Imageme} alt="addisu" />
         </div>
        </div>
        <div className="educations">
            <h2>Educations</h2>
            <div className="edu-flex1">
            <div className="degree1">
                <h3>Jimma univerity, Jimma Ethiopia</h3>
                <ul>
                    <li>Learning Master of Science in Pharmaceutical quality Assurance</li>
                </ul>
            </div>
             <div className="years">
                <p>2022-Now</p>
             </div>
            </div>
            <div className="edu-flex">
            <div className="degree2">
                <h3>University of Gondar, Gondar Ethiopia</h3>
                <ul>
                    <li>Bachlealor of Pharmacy(Bpharm)</li>
                </ul>
            </div>
            <div className="years">
                <p>2017-2021</p>
             </div>
            </div>
        </div>
        <div className="skills">
            <div className="skillh1">   
            <h1>Skills</h1> </div>


            <div className="allskils">
            <div className="programmining">
                <h2>Programming</h2>
                <ul>
                    <li>R programming</li>
                </ul>
            </div>
             <div className="tools">
                <h2>  Tools</h2>
                  <ul>
                    <li>STATA</li>
                    <li>MS Excel</li>
                    <li>MS Word</li>
                    <li>NVivo</li>
                    <li>Atlas Ti</li>
                    <li>SPSS</li>
                  </ul>
             </div>
             <div className="certificats">
               <h2> <a href="#">Certificates</a> </h2>
               <ul>
                <li>Certificates of completion of online education from University of Tartu</li>
                <li>Certificates of completions of first degree in Pharmacy from University of Gondar</li>
                <li>Certificate of participation from University of Gdansk</li>
                <li>Certificate of appricaition from University of Gondar Schhol of Pharmacy for outstanding score</li>
                <li>Certificate of acheivement from Bsics of clinical trail management</li>
                <li> Certificates of LC-MS method Validation from university of Tartu </li>
               </ul>
             </div>
            </div>
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

export default About