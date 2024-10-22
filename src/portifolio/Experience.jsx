import React from 'react';
import "./experience.css";
import Image1 from"../Component2/images/istockphoto-1899823419-612x612.webp";
import Image2 from"../Component2/images/istockphoto-499517325-612x612.jpg";

function Experience() {
  return (
    <section id="experience" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" >
    <div >
       <div className='horizontal-line'></div>
           <div className="head-p">
               <p className='years-of-exp'>Over 3 years of experience</p>
               <h1 className='my-experiances'>My Experience</h1>
           </div>
        <div className="container-exp">
             <div className="last-gondar">
             <img src={Image2} alt="Student" className='image1'/>
               <div className="lists">
               <p>2021-2022</p>
                <h3>University of Gondar, 2021-2022</h3>
                 <ol>
                   <li>Research Assistant/Lecturer's Assistant</li>
                   <li>Assisted in research projects in the field of pharmaceutics.
                   </li>
                   <li>Supported lecturers in delivering course materials and conducting 
                   laboratory sessions.</li>
                   <li>Contributed to the development of teaching materials and assessments.
                   </li>
                 </ol>
               </div>
                
             </div>
             <div className="currunt">
                  <div>
                  <img src={Image1} alt="Student" className='image2'/>
                  </div>
                 <div className="learning">
                     <p>2022-Present </p>
                     <h4>MSc student in Pharmaceutics at Jimma University</h4>
                    
                </div>
             </div>

        </div>
    </div>
    </section>
  )
}

export default Experience
